document.getElementById('login-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:4000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const messageDiv = document.getElementById('message');

    if (response.headers.get("content-type")?.includes("application/json")) {
      const data = await response.json();

      if (response.ok) {
        messageDiv.style.color = 'green';
        messageDiv.textContent = data.message || 'Login successful!';
        // Optional: window.location.href = "/dashboard.html";
      } else {
        messageDiv.style.color = 'red';
        messageDiv.textContent = data.error || 'Login failed';
      }
    } else {
      messageDiv.textContent = 'Unexpected response from server.';
    }

  } catch (error) {
    document.getElementById('message').textContent = 'Network error. Please try again.';
    console.error(error);
  }
});
