// Open the modal
function openModal() {
    const modal = document.getElementById('addRecipeModal');
    modal.style.display = 'flex';
}

// Close the modal
function closeModal() {
    const modal = document.getElementById('addRecipeModal');
    modal.style.display = 'none';
}

// Handle form submission
function submitRecipe(event) {
    event.preventDefault();

    // Get form values
    const recipeName = document.getElementById('recipeName').value;
    const recipeIngredients = document.getElementById('recipeIngredients').value;
    const recipeInstructions = document.getElementById('recipeInstructions').value;

    // For now, just log the data (you can send it to a server later)
    console.log('Recipe Submitted:', {
        name: recipeName,
        ingredients: recipeIngredients,
        instructions: recipeInstructions,
    });

    // Clear the form and close the modal
    document.getElementById('addRecipeForm').reset();
    closeModal();

    // Show a success message
    alert('Recipe submitted successfully!');
}
