// Resend Verification Countdown

let resendBtn = document.getElementById("resendBtn");

let countdown = 10;

let timer = setInterval(function(){

    countdown--;

    resendBtn.textContent =
    "Resend Verification (" + countdown + ")";

    if(countdown === 0){

        clearInterval(timer);

        resendBtn.disabled = false;

        resendBtn.textContent =
        "Resend Verification";
    }

}, 1000);


// Fake Student Database

const studentDatabase = [

{
    id: 1,
    firstName: "Sharon",
    lastName: "Mashai",
    email: "sharon@gmail.com",
    course: "Computer Science",
    age: 24
},

{
    id: 2,
    firstName: "John",
    lastName: "Smith",
    email: "john@gmail.com",
    course: "Information Technology",
    age: 21
},

{
    id: 3,
    firstName: "Mary",
    lastName: "Jones",
    email: "mary@gmail.com",
    course: "Software Development",
    age: 22
},

{
    id: 4,
    firstName: "Peter",
    lastName: "Brown",
    email: "peter@gmail.com",
    course: "Networking",
    age: 23
},

{
    id: 5,
    firstName: "Sarah",
    lastName: "White",
    email: "sarah@gmail.com",
    course: "Cyber Security",
    age: 20
}

];


// Question 1 - Synchronous JavaScript

function synchronousDemo(){

    console.log("Step-1 - The function is starting");

    console.log("Step-2 - The Process is in action");

    console.log("Step-3 - The function reached the final stage");

}

synchronousDemo();


// Question 2 - setTimeout()

function displayStudents(){

    console.log("Student Records:");

    studentDatabase.forEach(function(student){

        console.log(student);

    });

}

setTimeout(displayStudents, 3000);