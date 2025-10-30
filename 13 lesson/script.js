let formSignUp = document.getElementById('signupForm');

// Событие submit

formSignUp.addEventListener('submit', function(event) {
    event.preventDefault();

    // Список полей

    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirmPassword');

    // Блок для ошибок

    let usernameError = document.getElementById('usernameError');
    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');
    let confirmPasswordError = document.getElementById('confirmPasswordError');

    // Сброс текста в ошибке
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    let isValid = true;

    // Условия для поля username

    if (!username.value) {
        usernameError.textContent = 'Введите имя пользователя';
        username.style.borderColor = 'red';
        isValid = false;
    } else if (username.value.length < 4) {
        usernameError.textContent = 'Имя пользователя должно быть не менее 4 символов';
        username.style.borderColor = 'red';
        isValid = false;
    } else {
        username.style.borderColor = 'green';
    }

    // Условия для поля email

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.value) {
        emailError.textContent = 'Введите email';
        email.style.borderColor = 'red';
        isValid = false;
    } else if (!emailPattern.test(email.value)) {
        emailError.textContent = 'Некорректный email';
        email.style.borderColor = 'red';
        isValid = false;
    } else {
        email.style.borderColor = 'green';
    }

    // Условия для поля password

    if (!password.value) {
        passwordError.textContent = 'Введите пароль';
        password.style.borderColor = 'red';
        isValid = false;
    } else if (password.value.length < 6) {
        passwordError.textContent = 'Пароль должен быть не менее 6 символов';
        password.style.borderColor = 'red';
        isValid = false;
    } else {
        password.style.borderColor = 'green';
    }

    // Условия для поля confirm password

    if (!confirmPassword.value) {
        confirmPasswordError.textContent = 'Установите пароль';
        confirmPassword.style.borderColor = 'red';
        isValid = false;
    } else if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = 'Пароли не совпадают';
        confirmPassword.style.borderColor = 'red';
        isValid = false;
    } else {
        confirmPassword.style.borderColor = 'green';
    }

    // Проверка формы на true по всем условиям выше

    if (isValid) {
        alert('Форма отправлена успешно!');
    }
})