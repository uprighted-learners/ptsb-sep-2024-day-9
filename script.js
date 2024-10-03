// examples of booleans
let isLoggedIn = false;
let isAdmin = true;

if (isLoggedIn) {
    console.log("User is logged in");
    if (isAdmin) {
        console.log("User is an admin");
    } else {
        console.log("User is not an admin");
    }
} else {
    console.log("User is not logged in");
}

// evaluating conditions with numbers
let a = 10;
let b = 5;
let isGreaterThan = a > b;
console.log(isGreaterThan);

if (isGreaterThan) {
    console.log("a is greater than b");
}

// chaining else if statements
let age = 0;

if (age >= 1 && age < 20) {
    console.log('You are a kid');
} else if (age >= 20 && age < 60) {
    console.log('You are an adult');
} else if (age >= 60 && age < 100) {
    console.log('You are a senior');
} else if (age >= 100) {
    console.log('You are a centenarian');
} else {
    console.log('You are a newborn!');
}

// use OR conditional
let isStudent = false;
let isTeacher = false;

if (isStudent || isTeacher) {
    console.log('You are a student or a teacher');
} else {
    console.log('You are not a student or a teacher');
}

// ternary operator
let isMessage = false;

// SYNTAX: condition ? expression_if_true : expression_if_false; 
let message = isMessage ? "YES there is a message it is true!" : "NO there is no message it is false!";

console.log(message);