// Добавьте сброс анимации при повторном нажатии
document.getElementById('btn1').addEventListener('click', () => {
  const box = document.getElementById('box1');
  let angle = 0;
  
  function rotate() {
    angle += 5;
    box.style.transform = `rotate(${angle}deg)`;
    if (angle < 360) {
      setTimeout(rotate, 20);
    }
  }
  rotate();
});

// Для setInterval - сохраняем ID для возможной очистки
document.getElementById('btn2').addEventListener('click', () => {
    const box = document.getElementById('box2');
    let angle = 0;
    let intervalId = null;
    
    // Очищаем предыдущий интервал если есть
    if (intervalId) clearInterval(intervalId);
    
    intervalId = setInterval(() => {
        angle += 5;
        box.style.transform = `rotate(${angle}deg)`;
        if (angle >= 360) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }, 20);
});

// requestAnimationFrame - самый плавный вариант
document.getElementById('btn3').addEventListener('click', () => {
    const box = document.getElementById('box3');
    let angle = 0;
    let animationId = null;
    
    function animate() {
        angle += 5;
        box.style.transform = `rotate(${angle}deg)`;
        if (angle < 360) {
            animationId = requestAnimationFrame(animate);
        }
    }
    
    // Отменяем предыдущую анимацию если есть
    if (animationId) cancelAnimationFrame(animationId);
    animationId = requestAnimationFrame(animate);
});