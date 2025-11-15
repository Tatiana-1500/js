//Массив картин
const artworks = [
    { id: 1, title: "Мона Лиза", artist: "Леонардо да Винчи", year: 1503, image: "img/mona-lisa.jpg", description: "Портрет женщины, считающийся одним из величайших произведений искусства." },
    { id: 2, title: "Звездная ночь", artist: "Винсент ван Гог", year: 1889, image: "img/starry-night.jpg", description: "Ночное небо над деревней Сен-Реми, выполненное в импрессионистском стиле." },
    { id: 3, title: "Сотворение Адама", artist: "Микеланджело", year: 1512, image: "img/creation-of-adam.jpg", description: "Фреска на потолке Сикстинской капеллы, изображающая момент сотворения первого человека." },
    { id: 4, title: "Крик", artist: "Эдвард Мунк", year: 1893, image: "img/scream.jpg", description: "Выразительный образ человеческой тревоги и одиночества." },
    { id: 5, title: "Кувшинки", artist: "Клод Моне", year: 1919, image: "img/water-flowers.jpg", description: "Тихий пруд, усыпанный плавно колышущимися на воде белыми и розовыми кувшинками, где свет и отражения создают атмосферу умиротворения и гармонии с природой." }
];

const swiperWrapper = document.querySelector(".mySwiper .swiper-wrapper");

// Получает избранное из Local Storage
function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}

// Проверяет наличие картины в избранном
function isFavorite(id) {
    const favorites = getFavorites();
    return favorites.some(a => a.id === id);
}

// Работа с избранным
function toggleFavorite(id, button) {
    let favorites = getFavorites();
    const art = artworks.find(a => a.id === id);

    if (isFavorite(id)) {
        // Удаляем из избранного
        favorites = favorites.filter(a => a.id !== id);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        button.textContent = "В избранное";
    } else {
        // Добавляем в избранное
        favorites.push(art);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        button.textContent = "Убрать из избранного";
    }
}

// Создает слайды
artworks.forEach(art => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `
    <img src="${art.image}" alt="${art.title}">
    <div class="art-info-slide">
        <h3>${art.title}</h3>
        <p>${art.artist}</p>
        <p>${art.year}</p>
        <p class="description">${art.description}</p>
        <button class="fav-btn"></button>
    </div>
    `;

    swiperWrapper.appendChild(slide);

    // Устанавливает текст кнопки
    const button = slide.querySelector(".fav-btn");
    button.textContent = isFavorite(art.id) ? "Убрать из избранного" : "В избранное";

    // Навешивает обработчик
    button.addEventListener("click", () => toggleFavorite(art.id, button));
});

// Инициализация Swiper
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoHeight: true,
});

//Добавляет анимацию
document.querySelectorAll(".swiper-slide img").forEach(img => {

    img.addEventListener("mouseenter", () => {
        gsap.to(img, {
            boxShadow: "0px 8px 20px rgba(0,0,0,0.6)",
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
        });
    });

    img.addEventListener("mouseleave", () => {
        gsap.to(img, {
            boxShadow: "0px 0px 0px rgba(0,0,0,0)",
            scale: 1,
            duration: 0.4,
            ease: "power2.inOut"
        });
    });

});