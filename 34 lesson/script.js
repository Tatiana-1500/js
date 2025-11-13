// Инициализирует сцену
const scene = new THREE.Scene();

// Камера
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

// Рендер
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Создает сетку
const gridSize = 8;
const ball = 0.5;
const spacing = 1.2;
const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff];

const grid = [];

for (let x = 0; x < gridSize; x++) {
    grid[x] = [];
    for (let y = 0; y < gridSize; y++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const geometry = new THREE.SphereGeometry( ball, 32, 32 );
        const material = new THREE.MeshStandardMaterial( { color} );
        const sphere = new THREE.Mesh( geometry, material );
        sphere.position.set(
            x * spacing - (gridSize * spacing) / 2 + spacing / 2,
            y * spacing - (gridSize * spacing) / 2 + spacing / 2,
            0
        );
        scene.add( sphere );
        grid[x][y] = {sphere, color};
    }
}

// Добавляет свет
const ambientLight = new THREE.AmbientLight( 0xffffff, 0.6 );
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

// Формирует группы
function findGroup (x, y, visited, group) {
    const color = grid [x][y].color;
    if(!color || visited[x][y]) return;
    visited [x][y] = true;
    group.push({x,y});

    const directions = [
        {dx: 1, dy: 0},
        {dx: -1, dy: 0},
        {dx: 0, dy: 1},
        {dx: 0, dy: -1},
    ]

    for(const {dx, dy} of directions) {
        const nx = x + dx;
        const ny = y + dy;
        if(nx >= 0 && nx < gridSize && ny >= 0 && ny < gridSize && grid[nx][ny].color === color) {
            findGroup(nx, ny, visited, group);
        }
    }
}

//Событие клика
window.addEventListener('click', (event) => {
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children);

    if(intersects.length >0) {
        const clickedObject = intersects[0].object;
        const position = clickedObject.position;

        const x = Math.round((position.x + (gridSize * spacing) / 2 - spacing / 2) / spacing);
        const y = Math.round((position.y + (gridSize * spacing) / 2 - spacing / 2) / spacing);

        const visited = Array.from({length: gridSize}, () => Array(gridSize).fill(false));

        const group = [];
        findGroup(nx, ny, visited, group);

        if (group.length >=3) {
            group.forEach(({x, y}) => {
                scene.remove(grid[x][y].sphere);
                grid [x][y] = null;
            });

            //Сдвигает шарики вниз
            for(let col = 0; col < gridSize; col++) {
                let emptyRow = gridSize - 1;
                for(let row = gridSize - 1; row >=0; row--) {
                    if(grid[col][row]) {
                        if(row !== emptyRow) {
                            grid[col][emptyRow] = grid[col][row];
                            grid[col][row] = null;
                            grid[col][emptyRow].sphere.position.y = emptyRow * spacing - (gridSize * spacing) / 2 + spacing / 2;
                        }
                        emptyRow--;
                    }
                }
                //Заполняет пустые места сетки новыми шариками
                while(emptyRow => 0) {
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    const geometry = new THREE.SphereGeometry( ball, 32, 32 );
                    const material = new THREE.MeshStandardMaterial( { color} );
                    const sphere = new THREE.Mesh( geometry, material );
                    sphere.position.set(
                        col * spacing - (gridSize * spacing) / 2 + spacing / 2,
                        emptyRow * spacing - (gridSize * spacing) / 2 + spacing / 2,
                        0
                    );
                    scene.add( sphere );
                    grid[col][emptyRow] = {sphere, color};
                    emptyRow--;
                }
            }
        }
    }
});

// Анимация
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();