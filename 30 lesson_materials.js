// Инициализирует сцену
const scene = new THREE.Scene();

// Камера
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 4);

// Рендер
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;

// Точечный свет
const light = new THREE.PointLight( 0xffffff, 2 );
light.position.set(2, 8, 10);
light.castShadow = true;

light.shadow.mapSize.width = window.innerWidth;
light.shadow.mapSize.height = window.innerHeight;
scene.add(light);

// Геометрия для всех кругов
const geometry = new THREE.SphereGeometry(0.6, 28, 28);

// Массив материалов
const materials = [
    // 1 круг
    new THREE.MeshBasicMaterial({
        color: 0x0000ff
    }),

    // 2 круг
    new THREE.MeshLambertMaterial({
        color: 0x0000ff
    }),

    // 3 круг
    new THREE.MeshPhongMaterial({
        color: 0x0000ff
    }),

    // 4 круг
    new THREE.MeshPhongMaterial({
        color: 0x0000ff,
        shininess: 0
    }),

    // 5 круг
    new THREE.MeshPhongMaterial({
        color: 0x0000ff,
        shininess: 30
    }),

    // 6 круг
    new THREE.MeshPhongMaterial({
        color: 0x0000ff,
        shininess: 150
    }),

    // 7 круг
    new THREE.MeshStandardMaterial({
        color: 0x0000ff,
        roughness: 0,
        metalness: 0
    }),

    // 8 круг
    new THREE.MeshStandardMaterial({
        color: 0x0000ff,
        roughness: 0.5,
        metalness: 0.5
    }),

    // 9 круг
    new THREE.MeshStandardMaterial({
        color: 0x0000ff,
        roughness: 1,
        metalness: 1
    }),
];

// Создает и размещает сферы 3x3
let index = 0;
for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
        const sphere = new THREE.Mesh(geometry, materials[index]);
        sphere.position.x = col * 2 - 2;
        sphere.position.y = 2 - row * 2;
        scene.add(sphere);
        index++;
    }
}

// Анимация
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();