// Инициализирует сцену
const scene = new THREE.Scene();

// Камера
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1, 5);

// Рендер
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;

// Добавляет сферу
const sphereGeometry = new THREE.SphereGeometry(1, 24, 24);
const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(-4, 0, 0);
sphere.castShadow = true;
scene.add(sphere);

// Добавляет цилиндр
const cylinderGeometry = new THREE.CylinderGeometry(1, 1, 2, 24);
const cylinderMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
cylinder.position.set(0, 0, 0);
cylinder.castShadow = true;
scene.add(cylinder);

// Добавляет куб
const boxGeometry = new THREE.BoxGeometry(2, 2, 2);
const boxMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.set(4, 0, 0);
box.castShadow = true;
scene.add(box);

// Плоскость
const planeGeometry = new THREE.PlaneGeometry( 20, 20 );
const planeMaterial = new THREE.MeshStandardMaterial( {color: 0xffffff} );
const plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.rotation.x = -Math.PI / 2;
plane.position.y = -2;
plane.receiveShadow = true;
scene.add( plane );

// Точечный свет
const light = new THREE.PointLight( 0xffffff, 2 );
light.position.set(2, 8, 10);
light.castShadow = true;

light.shadow.mapSize.width = window.innerWidth;
light.shadow.mapSize.height = window.innerHeight;
scene.add(light);

// Атмосферный свет
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// Анимация (сделала как в уроке с цилиндром)
function animate() {
  requestAnimationFrame(animate);

    sphere.rotation.x += 0.02;
  
    cylinder.rotation.x += 0.02;
    cylinder.rotation.y += 0.02;
  
    box.rotation.x += 0.02;
    box.rotation.y += 0.04;
    
   
   const angle = Date.now() * 0.001;
   const radius = 10;
   camera.position.x = Math.cos(angle) * radius;
   camera.position.y = 3;
   camera.position.z = Math.sin(angle) * radius;
   camera.lookAt(cylinder.position);

    renderer.render(scene, camera);
}

animate();