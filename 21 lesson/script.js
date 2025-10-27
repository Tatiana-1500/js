document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(MotionPathPlugin,TextPlugin)
    // Задание 1 и 2 -  перемещение круга из левого верхнего угла в правый нижний со сменой цвета
    gsap.to("#circle", {x: window.innerWidth - 180, y: window.innerHeight - 180, duration: 3, backgroundColor: "blue"});
    // Задание 1 -  увеличение круга в 2 раза
    gsap.to("#circle", {delay: 3, duration: 1, scale: 2});
    //Задание 3 - перемещение прямоугольнка
    gsap.to("#rect", {x: -(window.innerWidth - 120), duration: 3});
    //Задание 3 - вращение квадрата
    gsap.to("#square", {rotation: 360, duration: 1, repeat: -1})
});
