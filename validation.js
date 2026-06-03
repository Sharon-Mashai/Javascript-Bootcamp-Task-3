const form = document.getElementById("signupForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let terms = document.getElementById("terms");

    document.getElementById("usernameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("termsError").textContent = "";

    username.classList.remove("invalid");
    email.classList.remove("invalid");
    password.classList.remove("invalid");

    let valid = true;

    // Username Validation

    try{

        if(username.value.trim() === ""){
            throw new Error("Username is required");
        }

    }
    catch(error){

        document.getElementById("usernameError").textContent =
        error.message;

        username.classList.add("invalid");

        valid = false;
    }

    // Email Validation

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.value.trim() === ""){
        document.getElementById("emailError").textContent =
        "Email is required";

        email.classList.add("invalid");

        valid = false;
    }
    else if(!email.value.includes("@")){
        document.getElementById("emailError").textContent =
        "Email must contain @";

        email.classList.add("invalid");

        valid = false;
    }
    else if(!email.value.includes(".")){
        document.getElementById("emailError").textContent =
        "Email must contain a domain such as .com";

        email.classList.add("invalid");

        valid = false;
    }
    else if(!emailPattern.test(email.value)){
        document.getElementById("emailError").textContent =
        "Please enter a valid email address";

        email.classList.add("invalid");

        valid = false;
    }

    // Password Validation

    if(password.value.length < 8){

        document.getElementById("passwordError").textContent =
        "Password must be at least 8 characters";

        password.classList.add("invalid");

        valid = false;
    }

    // Terms Checkbox

    if(!terms.checked){

        document.getElementById("termsError").textContent =
        "You must accept the terms";

        valid = false;
    }

    if(valid){

        alert("Signup Successful!");

    }

});


// Countdown Timer

let countdown = 10;

const resendBtn = document.getElementById("resendBtn");

let timer = setInterval(function(){

    countdown--;

    resendBtn.textContent =
    `Resend Verification (${countdown})`;

    if(countdown === 0){

        clearInterval(timer);

        resendBtn.disabled = false;

        resendBtn.textContent =
        "Resend Verification";

    }

}, 1000);


// Resend Button Click Event

resendBtn.addEventListener("click", function(){

    alert("Verification email has been resent.");

});