let button = document.getElementById('btnDblClick');
button.addEventListener('dblclick', function() {
    button.textContent = 'Кнопка нажата дважды';
})
button.addEventListener('dblclick', function() {
    button.textContent = 'Нажми меня дважды';
});

let select = document.getElementById('selectColor');
select.addEventListener('change', function() {
    document.body.style.backgroundColor = select.value;
})