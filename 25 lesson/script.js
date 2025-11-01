const object = document.querySelector('.object');
const coordinatesDisplay = document.getElementById('coordinates');

let x = 0;
let y = 0;

//Ограничивает движение
document.addEventListener('keydown', (event) => {
    const objectWidth = object.offsetWidth;
    const objectHeight = object.offsetHeight;
    const maxX = window.innerWidth - objectWidth;
    const maxY = window.innerHeight - objectHeight;

    switch (event.key) {
        case 'ArrowUp':
            if (y > 0) y -= 10;
            break;
        case 'ArrowDown':
            if (y < maxY) y += 10;
            break;
        case 'ArrowLeft':
            if (x > 0) x -= 10;
            break;
        case 'ArrowRight':
            if (x < maxX) x += 10;
            break;
        
        // Поворот по нажатию клавиши Q
        case 'q':
        case 'Q':
            object.style.transform = `translate(${x}px, ${y}px) rotate(180deg)`;
            setTimeout(() => {
                object.style.transform = `translate(${x}px, ${y}px) rotate(0deg)`;
            }, 2000);
            return;
    }

    object.style.transform = `translate(${x}px, ${y}px)`;

    // Отображает координаты
    coordinatesDisplay.textContent = `x: ${x}, y: ${y}`;
});

// Добавляет тень при зажатии мыши
object.addEventListener('mousedown', () => {
    object.classList.add('grabbed');
});

object.addEventListener('mouseup', () => {
    object.classList.remove('grabbed');
});