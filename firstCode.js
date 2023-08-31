// my first code
console.log("Hello World!");

/* comment within 
multiple lines 
semicolon (;) is optional in JS */

// [!] creating/declaring variable 
let message;

// adding data or value to the variable that have been created
message = "Hello there!";

console.log(message);

// [!] 3 different ways/syntax to declare variable
var globalVariable = "this is Global Variable";

let replaceable = "this value will be replaced or reassigned";
console.log(replaceable);
replaceable = "I Love JavaScript";
console.log(replaceable);

const constant = "Hello Purwadhika";

// [!] Data Types

// > primitive
let secondMessage = "JavaScript"; //string
let count = 1; //number
let bigNumber = 234508090n; //bigInt (big integer)
let isTrue = true; //boolean
let isFalse = false; //boolean
let noData = null; //null
let noAssigned; //undefined

// > non-primitive
const person = {
    name: "james",
    age: 24,
    gender: "male",
}; //object

const arr = [1,2,3,4,"Hello",true]; //array

// typeof is a syntax to see/inquiry what kind of data type in a variable
/*
console.log(typeof secondMessage);
console.log(typeof count);
console.log(typeof bigNumber);
console.log(typeof isTrue);
console.log(typeof isFalse);
console.log(typeof noData);
console.log(typeof noAssigned);
console.log(typeof person);
console.log(typeof arr);
*/

// [!] String Built-in Method -> str. 
let str = "purwadhika bandung";
/*
console.log(str.toUpperCase());
console.log(str.charAt(0));
console.log(str.replace("a", "i")); //only replace the value that it finds first
console.log(str.replaceAll("a", "i")); //replace all
console.log(str.split("")); 
console.log(str.split(" ")); //split by space
console.log(str.split("a")); //split by "a" letter
*/

console.log(str + " web development");
//template literals 
console.log(`${str} job connector`);

// [!] Number Built-in Method -> num.
let num = 234.5;
console.log(typeof num);
console.log(typeof num.toString());
console.log(num.toFixed());


