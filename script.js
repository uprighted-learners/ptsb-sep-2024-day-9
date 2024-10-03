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