document.addEventListener('DOMContentLoaded', function() {
    if (isLoggedIn()) {
        showLoggedInUI();
    } else {
        showLoggedOutUI();
    }
});

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'razaque' && password === '123') {
        localStorage.setItem('isLoggedIn', true);
        showLoggedInUI();
    } else {
        alert('Invalid username or password');
    }
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    showLoggedOutUI();
}

function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

function showLoggedInUI() {
    document.getElementById('login-status').textContent = 'Logged in';
    document.getElementById('login-form').style.display = 'none';
}

function showLoggedOutUI() {
    // document.getElementById('login-status').textContent = 'Logged out';
    document.getElementById('login-form').style.display = 'block';
}
