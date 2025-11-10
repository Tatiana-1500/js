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

// Плоскость
const planeGeometry = new THREE.PlaneGeometry( 20, 20 );
const planeMaterial = new THREE.MeshStandardMaterial( {color: 0xffffff} );
const plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.rotation.x = -Math.PI / 2;
plane.position.y = -2;
plane.receiveShadow = true;
scene.add(plane);

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

// Добавляет аудио
const listener = new THREE.AudioListener();
camera.add( listener );
const sound = new THREE.PositionalAudio( listener );
const audioLoader = new THREE.AudioLoader();

let isPlaying = false;

const playButton = document.createElement('button');
playButton.textContent = 'Play';
playButton.style.position = 'absolute';
playButton.style.top = '16px';
playButton.style.left = '16px';
playButton.style.zIndex = '1000';
document.body.appendChild(playButton);

playButton.addEventListener('click', () => {
    if (!isPlaying) {
        isPlaying = true;
        sound.play();
        animate();
        playButton.textContent = 'Playing...'; 
    }
});

audioLoader.load( 'https://cdn.freesound.org/previews/831/831588_9839964-lq.ogg', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop( true );
	sound.setVolume( 0.5 );
});

// Добавляет куб
const boxGeometry = new THREE.BoxGeometry(2, 2, 2);
const boxMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.set(0, 0, 0);
box.castShadow = true;
scene.add(box);

box.add(sound);

// Анимация
function animate() {
   requestAnimationFrame(animate);
   
   box.rotation.x += 0.01;
   box.rotation.y += 0.01;
   
   const angle = Date.now() * 0.001;
   const radius = 8;
   camera.position.x = Math.cos(angle) * radius;
   camera.position.y = 3;
   camera.position.z = Math.sin(angle) * radius;
   camera.lookAt(box.position);
   
   renderer.render(scene, camera);
}