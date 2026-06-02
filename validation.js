const form = document.getElementById("signupForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let terms = document.getElementById("terms");

    let usernameError = document.getElementById("usernameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let termsError = document.getElementById("termsError");

    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    termsError.textContent = "";

    username.style.border = "1px solid #cccccc";
    email.style.border = "1px solid #cccccc";
    password.style.border = "1px solid #cccccc";

    let valid = true;

    if(username.value.trim() === ""){
        usernameError.textContent = "Username is required";
        username.style.border = "2px solid red";
        valid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.value.trim() === ""){
        emailError.textContent = "Email is required";
        email.style.border = "2px solid red";
        valid = false;
    }
    else if(!emailPattern.test(email.value)){
        emailError.textContent = "Invalid email format";
        email.style.border = "2px solid red";
        valid = false;
    }

    if(password.value.trim() === ""){
        passwordError.textContent = "Password is required";
        password.style.border = "2px solid red";
        valid = false;
    }
    else if(password.value.length < 8){
        passwordError.textContent =
        "Password must be at least 8 characters";
        password.style.border = "2px solid red";
        valid = false;
    }

    if(!terms.checked){
        termsError.textContent =
        "You must accept the terms and conditions";
        valid = false;
    }

    if(valid){
        alert("Signup Successful");

        form.reset();
    }

});