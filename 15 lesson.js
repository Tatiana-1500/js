// Задание 1
class Car {
    constructor (brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    //Задание 2
    getInfo() {
        console.log(`Марка: ${this.brand}, Модель: ${this.model}, Год выпуска: ${this.year}`);
    }
    startEngine() {
        console.log("Двигатель запущен!");
    }
}

//Задание 3
let car1 = new Car("Mercedes", "GLE", 2022);
let car2 = new Car("Volkswagen", "Golf", 2020);
let car3 = new Car("Hyunday", "Solaris", 2015);

car1.getInfo();
car1.startEngine();

car2.getInfo();
car2.startEngine();

car3.getInfo();
car3.startEngine();

//Задание 4
class ElectricCar extends Car {
    constructor (brand, model, year, batteryCapacity) {
        super(brand, model, year);
        this.batteryCapacity = batteryCapacity
    }

    startEngine() {
        console.log("Электромотор запущен!");
    }
}

let car4 = new ElectricCar("Tesla", "Model 3", 2023, "75 кВт·ч");

car4.getInfo();
car4.startEngine();