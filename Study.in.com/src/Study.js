function showSignup() {
    document.querySelector("container1").display = "block";
    document.querySelector("container2").display = "flex"; // Show Signup container
}

function showLogin() {
    document.querySelector("container2").display = "block";
    document.querySelector("container1").display = "flex"; // Show Login container
}


function goToNext() {
    // Redirect to the desired page
    window.location.href = "/Study.in-H/first.html";
}