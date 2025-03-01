// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('myModal'); // Select the modal element
    const closeButton = document.querySelector('.close-button'); // Select the close button
  
    // Open the modal
    function openModal() {
      modal.style.display = 'block';
    }
  
    // Close the modal
    function closeModal() {
      modal.style.display = 'none';
    }
 
    // Close modal if user clicks outside the modal content
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  
    // Handle form submission
    function submitRecipe(event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      const recipeName = document.getElementById('recipeName').value;
      const recipeIngredients = document.getElementById('recipeIngredients').value;
      const recipeInstructions = document.getElementById('recipeInstructions').value;
  
      if (recipeName && recipeIngredients && recipeInstructions) {
        alert(`Recipe "${recipeName}" submitted successfully!`);
        closeModal(); // Close the modal
        document.getElementById('myForm').reset(); // Reset the form fields
      } else {
        alert('Please fill out all fields before submitting.');
      }
    }
  
    // Expose the functions to the global scope for inline HTML onclick
    window.openModal = openModal;
    window.closeModal = closeModal;
    window.submitRecipe = submitRecipe;
  });
  