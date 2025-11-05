// Инициализирует сцену
const scene = new THREE.Scene();

// Камера
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1, 5);

// Рендер
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Добавляет сферу
const sphereGeometry = new THREE.SphereGeometry(1, 24, 24);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(-4, 0, 0);
scene.add(sphere);

// Добавляет цилиндр
const cylinderGeometry = new THREE.CylinderGeometry(1, 1, 2, 24);
const cylinderMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
cylinder.position.set(0, 0, 0);
scene.add(cylinder);

// Добавляет куб
const boxGeometry = new THREE.BoxGeometry(2, 2, 2);
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.set(4, 0, 0);
scene.add(box);

// Анимация
function animate() {
  requestAnimationFrame(animate);

    sphere.rotation.y += 0.02;
    cylinder.rotation.y += 0.02;
    box.rotation.y += 0.04;

    renderer.render(scene, camera);
}

animate();