let work = document.querySelectorAll('#taskWork li');
work.forEach((item, index) => {
  item.textContent = `Задача ${index + 1} выполнена`;
});

let tasks = ["Купить молоко", "Выучить JavaScript", "Пойти на тренировку"];
const allTasksList = document.querySelector('#taskAll');
allTasksList.innerHTML = '';
tasks.forEach(taskText => {
  const li = document.createElement('li');
  li.textContent = taskText;
  allTasksList.appendChild(li);
});

let taskNew = document.createElement('li');
taskNew.textContent = 'Помыть посуду';
document.querySelector('#taskAll').prepend(taskNew);