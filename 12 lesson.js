//Задание 1
let isFridgeEmpty = true ;
if (isFridgeEmpty === true) {
    console.log("Холодильник пуст, надо сходить в магазин");
}

//Задание 2
let age = 15;
if (age >= 18) {
    console.log ("Доступ разрешён");
} else {
    console.log ("Доступ запрещён");
}

//Задание 3
let grade = 3;
if (grade === 5) {
    console.log("Отлично!");
} else if (grade === 4) {
    console.log("Хорошо");
} else if (grade === 3) {
    console.log("Удовлетворительно");
} else if (grade === 2) {
    console.log("Требуется пересдача");
} else {
    console.log ("Непонятно, какая оценка")
}

//Задание 4
let hour = 14;
console.log(hour < 12 ? "Доброе утро!" : "Добрый день!");