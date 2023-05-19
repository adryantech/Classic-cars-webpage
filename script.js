function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission to a server (for demonstration purposes)
  
    // Get the form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Display the message on the same page
    const messageDisplay = document.getElementById('message-display');
    messageDisplay.textContent = `Thank you, ${name}! We have received your message. We will contact you at ${email} soon.`;
  
    // Clear the form inputs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }
  