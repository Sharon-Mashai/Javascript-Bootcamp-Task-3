// Fake Database

const studentDatabase = [

{
    id: 1,
    firstName: "Sharon",
    lastName: "Mashai",
    email: "sharon@gmail.com",
    course: "JavaScript",
    age: 24
},

{
    id: 2,
    firstName: "Motsatsi",
    lastName: "Leshabane",
    email: "motsatsi@gmail.com",
    course: "Web Development",
    age: 22
},

{
    id: 3,
    firstName: "John",
    lastName: "Smith",
    email: "john@gmail.com",
    course: "Python",
    age: 23
},

{
    id: 4,
    firstName: "Nathan",
    lastName: "Boshoff",
    email: "nathan@gmail.com",
    course: "Data Science",
    age: 24
},

{
    id: 5,
    firstName: "Ntombizodwa",
    lastName: "Zulu",
    email: "ntombizodwa@gmail.com",
    course: "Cyber Security",
    age: 25
}

];


// QUESTION 1
// Synchronous JavaScript

function synchronousExample(){

    console.log("Step-1 - The function is starting");

    console.log("Step-2 - The Process is in action");

    console.log("Step-3 - The function reached the final stage");

}

synchronousExample();


// QUESTION 2
// Using setTimeout()

function displayStudents(){

    setTimeout(function(){

        let output = "<h2>Student Records</h2>";

        studentDatabase.forEach(function(student){

            output += `
            <p>
                <strong>ID:</strong> ${student.id}<br>
                <strong>Name:</strong> ${student.firstName} ${student.lastName}<br>
                <strong>Email:</strong> ${student.email}<br>
                <strong>Course:</strong> ${student.course}<br>
                <strong>Age:</strong> ${student.age}
            </p>
            <hr>
            `;
        });

        document.getElementById("studentOutput").innerHTML =
        output;

    }, 3000);

}

displayStudents();


// Usinf Promise 

function fetchStudents(){

    return new Promise(function(resolve, reject){

        setTimeout(function(){

            if(studentDatabase.length > 0){

                resolve(studentDatabase);

            }
            else{

                reject("No students found.");

            }

        }, 3000);

    });

}

fetchStudents()
.then(function(students){

    console.log("Promise executed successfully.");
    console.log(students);

})
.catch(function(error){

    console.log(error);

});