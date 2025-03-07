/*// Handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent page reload

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validation (optional: basic)
    if (!name || !email || !message) {
        alert('All fields are required!');
        return;
    }

    // Display a success message (you can also send this data to a server)
    alert(`Thank you, ${name}! Your message has been sent successfully.`);

    // Clear the form
    document.getElementById('contactForm').reset();
}
*/

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const form = e.target;
    const formData = new FormData(form);
  
    fetch('https://formspree.io/f/xvgzzwkp', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          document.getElementById('formResponse').textContent =
            'Thank you! Your message has been sent.';
          form.reset();
        } else {
          document.getElementById('formResponse').textContent =
            'Oops! Something went wrong. Please try again.';
        }
      })
      .catch((error) => {
        document.getElementById('formResponse').textContent =
          'Oops! Something went wrong. Please try again.';
      });
  });