// [6] Write a code to convert days to (how many) years, months and days

let setDays = 500;

// how many years
let years = Math.floor(setDays / 365); // 500 / 365 = 1. ...
let remaining = setDays % 365; // = 135

let months = Math.floor(remaining / 30); // 135 / 30 = 4. ...
let days = remaining % 30;

console.log(`${years} years, ${months} months, ${days} days`);



