// Данные 
const user = [
    { name: 'Анна', age: 25 },
    { name: 'Михаил', age: 15 },
    { name: 'Иван', age: 18 },
    { name: 'Мария', age: 32 },
    { name: 'Дмитрий', age: 12 },
    { name: 'София', age: 20 }
];

// Получение элементов из DOM
let showAdultsButton = document.getElementById('showAdults');
let showChildrenButton = document.getElementById('showChildren');
let showAllButton = document.getElementById('showAll');
let userList = document.getElementById('userList');

// Функция для отображения списка людей

function showUsers(userArray) {
    userList.innerHTML = '';
    userArray.forEach(user => {
        const listItem = document.createElement('li');
        let status;
            if (user.age >= 18) {
                status = 'Взрослый';
            } else {
                status = 'Ребёнок';
            }
        listItem.textContent = `${user.name}, ${user.age} лет, Статус: ${status}`;
        userList.appendChild(listItem);
    });
}

// Обработчик события вывода взрослых

showAdultsButton.addEventListener('click', () => {
    const adults = user.filter(user => user.age >= 18);
    showUsers(adults);
});

// Обработчик события вывода детей

showChildrenButton.addEventListener('click', () => {
    const children = user.filter(user => user.age < 18);
    showUsers(children);
});

// Обработчик события вывода всех

showAllButton.addEventListener('click', () => {
    showUsers(user);
});