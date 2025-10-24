//setTimeout()
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

//setInterval()
document.getElementById('btn2').addEventListener('click', () => {
    const box = document.getElementById('box2');
    let angle = 0;
    const interval = setInterval(() => {
    angle += 5;
    box.style.transform = `rotate(${angle}deg)`;
    if (angle >= 360) {
        clearInterval(interval);
    }
    }, 20);
});

//requestAnimationFrame()
document.getElementById('btn3').addEventListener('click', () => {
    const box = document.getElementById('box3');
    let angle = 0;
    function animate() {
        angle += 5;
        box.style.transform = `rotate(${angle}deg)`;
        if (angle < 360) {
            requestAnimationFrame(animate);
        }
    }
    requestAnimationFrame(animate);
});