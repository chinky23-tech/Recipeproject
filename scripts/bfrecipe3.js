  // Modal Popup for Review 
  const reviewBtn = document.getElementById('reviewBtn');
  const reviewModal = document.getElementById('reviewModal');
  const closeModal = document.getElementById('closeModal');
  const submitReview = document.getElementById('submitReview');

  // Open the modal
  reviewBtn.addEventListener('click', () => {
      reviewModal.style.display = 'block';
  });

  // Close the modal
  closeModal.addEventListener('click', () => {
      reviewModal.style.display = 'none';
  });

  // Handle review submission
  submitReview.addEventListener('click', () => {
      const reviewText = document.getElementById('reviewText').value;
      if (reviewText) {
          alert('Thank you for your review!');
          reviewModal.style.display = 'none';
          // Store the review in localStorage for simplicity
          localStorage.setItem('review', reviewText);
      }
  });

//Print the page 
  document.getElementById('printBtn').addEventListener('click', () => {
      window.print();
  });

  //Save the recipe or page for future reference
  document.getElementById('saveBtn').addEventListener('click', () => {
      const recipeData = {
          title: 'Breakfast Recipe',
          ingredients: [
              '2 slices bread',
              '2 tbsp carrot, chopped',
              // Add the rest of the ingredients
          ],
      };

      localStorage.setItem('savedRecipe', JSON.stringify(recipeData));
      alert('Recipe saved!');
  });

  // To retrieve saved recipe:
  const savedRecipe = localStorage.getItem('savedRecipe');
  if (savedRecipe) {
      console.log('Saved Recipe:', JSON.parse(savedRecipe));
  }
