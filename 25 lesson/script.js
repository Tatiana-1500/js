const object = document.querySelector('.object');
let x = 0;
let y = 0;

// Получаем размеры окна браузера
const maxX = window.innerWidth - object.offsetWidth;
const maxY = window.innerHeight - object.offsetHeight;

document.addEventListener('keydown', (event) => {
    if (event.key === 'q' || event.key === 'Q') {
        rotateObject();
    }
});

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            moveObject(x, Math.max(y - 10, 0));
            break;
        case 'ArrowDown':
            moveObject(x, Math.min(y + 10, maxY));
            break;
        case 'ArrowLeft':
            moveObject(Math.max(x - 10, 0), y);
            break;
        case 'ArrowRight':
            moveObject(Math.min(x + 10, maxX), y);
            break;
    }
});

function moveObject(newX, newY) {
    x = newX;
    y = newY;
    object.style.left = `${x}px`;
    object.style.top = `${y}px`;
    updateCoordinates();
}

function updateCoordinates() {
    document.getElementById('coordinates').innerText = `X: ${Math.round(x)} | Y: ${Math.round(y)}`;
}

updateCoordinates(); // Устанавливаем начальные значения координат

// Эффект захвата объектом при клике мыши
object.addEventListener('mousedown', () => {
    object.classList.add('grabbed');
});

object.addEventListener('mouseup', () => {
    object.classList.remove('grabbed');
});

// Функция вращения объекта при нажатии клавиши F
function rotateObject() {
    object.style.transitionDuration = '0.5s';
    object.style.transform = 'rotate(180deg)';
    setTimeout(() => {
        object.style.transitionDuration = '';
        object.style.transform = '';
    }, 500);
}

window.addEventListener('resize', () => {
    maxX = window.innerWidth - object.offsetWidth;
    maxY = window.innerHeight - object.offsetHeight;
});