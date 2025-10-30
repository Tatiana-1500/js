// Извлекает данные из localStorage или возвращает пустой массив
function getFavorites() {
   return JSON.parse(localStorage.getItem('favoriteTracks')) || [];
}

// Сохраняет обновлённый список избранного в localStorage
function saveFavorites(favorites) {
   localStorage.setItem('favoriteTracks', JSON.stringify(favorites));
}

// Обновляет отображение списка избранных треков и иконок
function updateFavoritesDisplay() {
   const favorites = getFavorites();
   const favoritesBox = document.getElementById('favorites');
   const trackElements = document.querySelectorAll('#tracks .track');

   favoritesBox.innerHTML = ''; // Очищаем блок избранных треков

   // Отображаем избранные треки
   favorites.forEach(track => {
      const trackBox = document.createElement('div');
      trackBox.className = 'favorite';

      const trackName = document.createElement('span');
      trackName.textContent = track;

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Удалить';
      removeButton.addEventListener('click', () => {
         removeFavorite(track);
      });

      trackBox.appendChild(trackName);
      trackBox.appendChild(removeButton);
      favoritesBox.appendChild(trackBox);
   });

   // Обновляем цвет иконок SVG
   trackElements.forEach(trackElement => {
      const trackName = trackElement.querySelector('span').textContent;
      const svg = trackElement.querySelector('svg');
      svg.style.fill = favorites.includes(trackName) ? '#b4241a' : '#ffffff';
   });
}

// Добавляет трек в избранное
function addFavorite(trackName) {
   const favorites = getFavorites();

   if (!favorites.includes(trackName)) {
      favorites.push(trackName);
      saveFavorites(favorites);
      updateFavoritesDisplay();

      // Задание 1 — добавляет потрясывание кнопки
      const button = Array.from(document.querySelectorAll('#tracks .track button'))
        .find(btn => btn.parentElement.querySelector('span').textContent === trackName);
      if (button) {
         button.classList.add('shake');
         setTimeout(() => button.classList.remove('shake'), 300);
      }

      // Задание 3 — обновляет счётчик избранного
      updateCounters();
   }
}

// Удаляет трек из избранного
function removeFavorite(trackName) {
   const favorites = getFavorites().filter(track => track !== trackName);
   saveFavorites(favorites);
   updateFavoritesDisplay();
}

// Добавляет обработчики для кнопок
function initializeButtons() {
   document.querySelectorAll('#tracks .track button').forEach(button => {
      const trackName = button.parentElement.querySelector('span').textContent;
      button.addEventListener('click', () => {
         addFavorite(trackName);
      });
   });
}

// Задание 2 и 3 — обновляет все счётчики
function updateCounters() {
   const trackCountSpan = document.getElementById('trackCount');
   if (trackCountSpan) {
      const trackElements = document.querySelectorAll('#tracks .track');
      trackCountSpan.textContent = trackElements.length;
   }

   const favoritesCountSpan = document.getElementById('favoritesCount');
   if (favoritesCountSpan) {
      favoritesCountSpan.textContent = getFavorites().length;
   }
}

// Инициализация при загрузке страницы
window.onload = () => {
   initializeButtons();
   updateFavoritesDisplay();

   // обновляет все счётчики
   updateCounters();
};