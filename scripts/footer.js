function showThankYou(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    const thankYouMessage = document.getElementById('thank-you-message');
    thankYouMessage.style.display = 'block'; // Show thank you message
    setTimeout(() => {
      thankYouMessage.style.display = 'none'; // Hide after 5 seconds
    }, 5000);
  }
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  