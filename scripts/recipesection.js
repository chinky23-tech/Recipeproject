/*
document.addEventListener("DOMContentLoaded", () => {
    const recipeWrapper = document.querySelector(".recipe-wrapper");
    const leftBtn = document.getElementById("leftBtn");
    const rightBtn = document.getElementById("rightBtn");

    // Scroll amount per click
    const scrollAmount = 450;

    // Scroll left
    leftBtn.addEventListener("click", () => {
        recipeWrapper.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
        });
    });

    // Scroll right
    rightBtn.addEventListener("click", () => {
        recipeWrapper.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
        });
    });
});
*/
// Scroll Button Functionality
document.querySelectorAll('.scroll-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const wrapper = this.closest('.recipe-container').querySelector('.recipe-wrapper');
        const scrollAmount = 300; // Adjust scroll amount as needed
        if (this.classList.contains('left-btn')) {
            wrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else if (this.classList.contains('right-btn')) {
            wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    });
});
/*
// Favorites Button Functionality
document.querySelectorAll('.favorite-btn').forEach(button => {
    button.addEventListener('click', function() {
        const recipeName = this.previousElementSibling.textContent;
        const favoritesContainer = document.getElementById('favorites-container');
        const favoriteItem = document.createElement('div');
        favoriteItem.textContent = recipeName;
        favoritesContainer.appendChild(favoriteItem);
    });
});
*/