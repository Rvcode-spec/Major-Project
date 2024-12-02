// JavaScript to handle the sign up link click
document.getElementById("showSignup").addEventListener("click", function(event) {
    event.preventDefault(); // Default link behavior ko rokein
    document.getElementById("container1").style.display = "none"; // Login container ko chhupa dein
    document.getElementById("container2").style.display = "block"; // Signup container ko dikhayein
});

// JavaScript to handle the log in link click
document.getElementById("showLogin").addEventListener("click", function(event) {
    event.preventDefault(); // Default link behavior ko rokein
    document.getElementById("container2").style.display = "none"; // Signup container ko chhupa dein
    document.getElementById("container1").style.display = "block"; // Login container ko dikhayein
});

// // JavaScript to handle the close icon click in Signup-Container
// document.querySelector("#container2 .close-icon").addEventListener("click", function() {
//     document.getElementById("container2").style.display = "none"; // Signup container ko chhupa dein
//     document.getElementById("container1").style.display = "block"; // Login container ko dikhayein
// });

// // JavaScript to handle the close icon click in Login-Container
// document.querySelector("#container1 .close-icon").addEventListener("click", function() {
//     document.getElementById("container1").style.display = "none"; // Login container ko chhupa dein
//     document.getElementById("container2").style.display = "block"; // Signup container ko dikhayein
// });