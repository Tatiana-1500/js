let usernameInput = document.getElementById('username');
let saveBtn = document.getElementById('saveBtn');
let showBtn = document.getElementById('showBtn');
let deleteBtn = document.getElementById('deleteBtn');
let output = document.getElementById('output');
let nameCount = document.getElementById('nameCount');

//Функция для отображения имени
function showName() {
    let dataName = localStorage.getItem('username');
    if (dataName) {
        output.textContent = `Сохраненное имя: ${dataName}`;
    } else {
        output.textContent = 'Имя не найдено';
    }
}

//Сохранение имени
saveBtn.addEventListener('click', () => {
    let username = usernameInput.value;
    if (username) {
        localStorage.setItem('username', username);
        usernameInput.value = '';
        output.textContent = `Имя ${username} сохранено`;
    } else {
        output.textContent = 'Нужно ввести имя перед сохранением';
    }
}) 

//Показ имени
showBtn.addEventListener('click', showName);

//Удаление имени
deleteBtn.addEventListener('click', () => {
    localStorage.removeItem('username');
    output.textContent = 'Имя удалено';
})

// Функция обновления счётчика
function updateCount() {
    let savedName = localStorage.getItem('username');
    let count = savedName ? 1 : 0;
    nameCount.textContent = `Количество сохранённых имён на сайте: ${count}`;
}