let form = document.getElementById("signupForm");

let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let terms = document.getElementById("terms");
const emailregex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (fullName.value.trim() == "") {
        fullName.setCustomValidity("Please enter your name");
    }
    else if (fullName.value.trim().length < 3) {
        fullName.setCustomValidity("Name must have at least 3 characters");
    }
    else {
        fullName.setCustomValidity("");
    }

    if (email.value.trim() == "") {
        email.setCustomValidity("Please enter your email");
    }
    else if (!emailregex.test(email.value)) {
        email.setCustomValidity("Please enter a valid email");
        
    }
    else {
        email.setCustomValidity("");

    }


    if (password.value == "") {
        password.setCustomValidity("Please enter a password");
    }
    else if (password.value.length < 8) {
        password.setCustomValidity("Password must contain at least 8 characters");
    }
    else {
        password.setCustomValidity("");
    }

    if (confirmPassword.value == "") {
        confirmPassword.setCustomValidity("Please confirm your password");
    }
    else if (password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
    }
    else {
        confirmPassword.setCustomValidity("");
    }

    if (terms.checked == false) {
        terms.setCustomValidity("You must agree to the Terms and Conditions");
    }
    else {
        terms.setCustomValidity("");
    }

    if (form.checkValidity() == false) {
        form.classList.add("was-validated");
    }
    else {


        fullName.setCustomValidity("");
        email.setCustomValidity("");
        password.setCustomValidity("");
        confirmPassword.setCustomValidity("");
        terms.setCustomValidity("");
        
        form.reset();
        form.classList.remove("was-validated");
        alert("Sign-up successfully!");
    }

});

