let age = 21;

if (age >= 17) {
  console.log("You can now create an ID card.");
} else {
  console.log("You are not enough to create and ID card.");
}

// [!] Else If, multiple conditions
let grade = "D";

if (grade === "A") {
    console.log("Good job, excellent result!");
} else if (grade === "B") {
    console.log("Great result!");
} else if (grade === "C") {
    console.log("Average result.");
} else {
    console.log("Below average, take the re-examination.");
}

// [!] Switch Case
let now = new Date();
let day = now.getDay();

console.log(day);

switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Saturday");
        break;
}

// 
let month = now.getMonth();

switch (month) {
    case 0:
        console.log("January");
        break;
    case 1:
        console.log("February");
        break;
    case 2:
        console.log("March");
        break;
    case 3:
        console.log("April");
        break;
    case 4:
        console.log("May");
        break;
    case 5:
        console.log("June");
        break;
    case 6:
        console.log("July");
        break;
    case 7:
        console.log("August");
        break;
    case 8:
        console.log("September");
        break;
    case 9:
        console.log("October");
        break;
    case 10:
        console.log("November");
        break;
    default:
        console.log("December");
        break;
}

//Nan example
let str = "abc";

console.log(Number(str)); 

// [!] Logical Operators
let car = "BMW";

if (car === "BMW" || car === "Mercedes") {
    console.log("This car is awesome!");
}

// [!] Ternary Operator
let word = "Javascript";

// using if else
if (word === "Javascript") {
    console.log("This is Javascript");
} else {
    console.log("Not Javascript");
}

// using ternary
console.log(word === "Javascript" ? "Yes, this is Javascript" : "No, not Javascript");

// example 2
let word2 = "Typescript";

if (word2 === "Javascript") {
    console.log("This is Javascript");
} else if (word2 === "Python") {
    console.log("This is Python");
} else {
    console.log("Not Javascript nor Python")
}

console.log(word2 === "Javascript" ? "This is Javascript" : 
word2 === "Python" ? "This is Python" : "Not Javascript nor Python");

