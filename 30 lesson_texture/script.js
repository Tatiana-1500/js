const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Подключаер текстуру
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('https://raw.githubusercontent.com/timoxley/threejs/master/examples/textures/land_ocean_ice_cloud_2048.jpg');
const material = new THREE.MeshBasicMaterial({ map: texture });

const geometry = new THREE.SphereGeometry(3, 32, 32);
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);


function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.005;
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});