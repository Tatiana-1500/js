// Подключает API
fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json')
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        let currencyContainer = document.getElementById('currency');
        currencyContainer.innerHTML = `
        <p>Евро = 1</p>
        <p>USD (доллар): ${data.eur.usd}</p>
        <p>RUB (рубль): ${data.eur.rub}</p>
        <p>AED (дирхам): ${data.eur.aed}</p>
        <p>THB (тайский бат): ${data.eur.thb}</p>
        `;
    })
    .catch (function (error) {
        console.error("Ошибка получения данных:", error);
    })