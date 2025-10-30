// Создает контейнер для постов
let postsContainer = document.getElementById('posts');

// Подключает API
fetch('https://dummyjson.com/posts')
  .then(function(response) {
      return response.json();
  })
  .then(function(data) {
    console.log(data.posts);

    //Создает пост
    function createPostItem(post) {
      // Проверяет reactions
      let likes = 0;
      let dislikes = 0;

      if (typeof post.reactions === 'object') {
        likes = post.reactions.likes;
        dislikes = post.reactions.dislikes;
      } else {
        likes = post.reactions;
      }

      // Создает контент карточки
      return `
        <div class="posts-item">
          <h2>${post.title}</h2>
          <p>${post.body}</p>
          <div class="posts-footer">
            <div class="tags">
              ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="posts-info">
              <p class="posts-icon like">${likes}</p>
              <p class="posts-icon dislike">${dislikes || ''}</p>
              <p class="posts-icon view">${post.views}</p>
            </div>
          </div>
        </div>
      `;
    }

    // Добавляет все карточки
    function displayPosts(posts) {
      postsContainer.innerHTML = posts.map(createPostItem).join('');
    }

    // Отображает все посты
    displayPosts(data.posts);
  })
  .catch(function(error) {
      console.error('Ошибка при получении данных:', error);
  });