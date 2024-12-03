// Select elements
const loginBox = document.getElementById('loginBox');
const signUpBox = document.getElementById('signUpBox');
const closeIcons = document.querySelectorAll('.close-icon');

// Event listeners for close icons
closeIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        loginBox.style.display = 'none';
        signUpBox.style.display = 'none';
    });
});




