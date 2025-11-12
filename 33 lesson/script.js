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

// Анимация
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();