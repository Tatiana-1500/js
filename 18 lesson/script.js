// Подключает API
fetch('https://randomuser.me/api/?results=10')
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.results);

        let userContainer = document.getElementById('userContainer');
        data.results.forEach(function (user) {
            userContainer.innerHTML += `
                <div class="user">
                    <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
                    <div>
                        <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
                        <p><strong>Gender:</strong> ${user.gender}</p>
                        <p><strong>City:</strong> ${user.location.city}</p>
                        <p><strong>Email:</strong> <a href="mailto:${user.email}">${user.email}</a></p>
                        <p><strong>Username:</strong> ${user.login.username}</p>
                        <p><strong>Password:</strong> ${user.login.password}</p>
                    </div>
                </div>
            `;
        })
    })
    .catch (function (error) {
        console.error("Ошибка получения данных:", error);
    })