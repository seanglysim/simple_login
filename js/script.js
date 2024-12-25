document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let errorMessage = document.getElementById('error-message');

    if (!username || !password) {
        errorMessage.textContent = "Both fields are required!";
        return;
    }

    // Simulating login validation (replace with actual backend validation)
    if (username === "admin" && password === "password123") {
        console.log("Redirecting to: " + window.location.href);
        window.location.href = "https://web.facebook.com/SeanglyIT666/";
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
});