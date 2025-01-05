document.addEventListener('DOMContentLoaded', () => {
    const favoritesList = document.getElementById('favorites-list');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
    // Function to display favorites
    function displayFavorites() {
      favoritesList.innerHTML = '';
      if (favorites.length === 0) {
        favoritesList.innerHTML = '<p>No favorites added yet.</p>';
        return;
      }
  
      favorites.forEach((fav) => {
        const favoriteItem = document.createElement('div');
        favoriteItem.classList.add('favorite-item');
        favoriteItem.innerHTML = `
          <h3>${fav.title}</h3>
          <button class="remove-from-favorites" data-id="${fav.id}">Remove</button>
        `;
        favoritesList.appendChild(favoriteItem);
      });
  
      // Add event listeners to Remove buttons
      document.querySelectorAll('.remove-from-favorites').forEach((button) => {
        button.addEventListener('click', (e) => {
          const recipeId = e.target.getAttribute('data-id');
          const updatedFavorites = favorites.filter((fav) => fav.id !== recipeId);
          localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
          alert('Recipe removed from Favorites');
          location.reload();
        });
      });
    }
  
    displayFavorites();
  });
