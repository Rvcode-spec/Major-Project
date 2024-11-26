document.getElementById("to-signup").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent page reload
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
});

document.getElementById("to-login").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent page reload
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
});
