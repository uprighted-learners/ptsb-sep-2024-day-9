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
    if (age >= 1 && age < 10) {
        console.log('You are a child');
    } else if (age >= 10 && age < 18) {
        console.log('You are a teenager');

    } else {
        console.log('You are nearly an adult')
    }
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
let isMessage = true;

// SYNTAX: condition ? expression_if_true : expression_if_false; 
let message = isMessage ? "YES there is a message it is true!" : "NO there is no message it is false!";

console.log(message);

// binary expression
if (0) {
    console.log("This won't run.");
}

// truthy falsy expression
if ("") {
    console.log("IT RUNS, pa")
} else {
    console.log("IT DON'T RUN, pa")
}

// with nullish statement
if (null) {
    console.log("IT RUNS, ma")
} else {
    console.log("IT DON'T RUN, ma")
}

// with variable declarations
let myVariable;

if (myVariable) {
    console.log("I guess it is TRUE!")
} else {
    console.log("I guess it is FALSE!")
}

// with an unnamed function
if (function () { }) {
    console.log("it is TRUE!")
} else {
    console.log("it is FALSE!")
}

// with an empty object
if ({}) {
    console.log("EMPTY OBJECT it is TRUE!")
} else {
    console.log("EMPTY OBJECT it is FALSE!")
}

// with an empty array
if ([]) {
    console.log("EMPTY ARRAY it is TRUE!")
} else {
    console.log("EMPTY ARRAY it is FALSE!")
}

// with a number
console.log("0" == 0) // true
console.log("0" === 0) // false
console.log(654 === 654) // true

// with a false comparison
console.log(false == 0) // true
console.log(false === 0) // false

// with undefined and null
console.log(undefined == null) // true
console.log(undefined === null) // false

// with a false object
console.log({} == true) // false
if ({}) {
    console.log("GO GO GO ")
}

// with a false object
let booleanObject = new Boolean(false);
console.log(booleanObject)

if (booleanObject) {
    console.log("booleanObject evaluates as truthy")
}