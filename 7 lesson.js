let book = {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1966,
    getSummary() {
        return `Название: ${this.title}, Автор: ${this.author}, Год издания: ${this.year}`;
    }
};
console.log(book.getSummary());

let laptop = {
    brand: "Apple",
    model: "Macbook Pro",
    processor: " Intel Core i9",
    price: 50000
}
for (let key in laptop) {
    console.log(`${key}: ${laptop[key]}`)
}
const laptopArray = Object.entries(laptop);
console.log(laptopArray);

let basicInfo = {
    name: "Петр",
    age: 25
}
let contactInfo = {
    email: "peter@gmail.com",
    phone: "79999999999"
}
let preferences = {
    language: "English",
    theme: "light"
}
let userProfile = Object.assign({}, basicInfo, contactInfo, preferences);
console.log(userProfile);
userProfile.language = "German";
console.log(userProfile);
Object.freeze(userProfile);
delete userProfile.phone;