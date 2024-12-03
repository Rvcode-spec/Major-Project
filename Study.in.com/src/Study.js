// Select elements
const loginBox = document.getElementById('loginBox');
const signUpBox = document.getElementById('signUpBox');
const closeIcons = document.querySelectorAll('.close-icon');
const loginBtn = document.querySelector('.login-Btn');

loginBtn.addEventListener('click', () => {
    if (loginBox.style.display === 'block') {
        loginBox.style.display = 'none';
    } else {
        loginBox.style.display = 'block';
    }
});

// Event listeners for close icons
closeIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        loginBox.style.display = 'none';
        signUpBox.style.display = 'none';
    });
});




