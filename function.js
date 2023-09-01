// [!] Defining function
// > function declaration
// 1 param
function square(num) {
  return num * num; // return -> apa yg mau di kembalikan/di hasilkan
}

const x = square(4);
console.log(x);

console.log(square(7));

// 2 param
function addition(a, b) {
  return a + b;
}

console.log(addition(10, 5));
console.log(addition(49, 78));

// > function Expression
const square2 = function(num) {
  return num * num;
}

console.log(square2(8));

// *function declaration & expression -> cara pemanggilan sama, hanya berbeda cara pembuatan

// Default parameter 
function addition(a, b = 1) { // -> kalau argumen tidak diisi maka diisi default, disini default = 1
    return a + b;
}
// default berguna utk jika argumen nya tidak diisi

console.log(addition(10));

function addition2(a = 1, b = 2) {
    return a + b;
}

console.log(addition2());

// [!] Rest parameter
// ( ...other) untuk menampung/menyimpan sisa argumen, jika argumen melebihi parameter yg dibuat
function multiply(a = 1, b = 2, ...other) { //rest param
    console.log(other);
    return a * b;
}

console.log(multiply(10, 2, 5, 8, 5, 13, 26));

// [!] Nested Function

function getMessage(firstName) {
    function sayHello() {
        return "Hello " + firstName + " ,";
    }

    function welcomeMessage() {
        return "Welcome to Purwadhika!";
    }

    return sayHello() + " " + welcomeMessage();
}

console.log(getMessage("Toby"));

// [!] Function -> Closure 

function greetingName(name) {
    const defaultMessage = "Hello ";
    return function() {
        return defaultMessage + name;
    }
}

const greetingDavid = greetingName("David");
console.log(greetingDavid());

// [!] Function -> Currying
function multiplier (factor) {
    return function (number) {
        return number * factor;
    }
}

const mul3 = multiplier(3);
const mul5 = multiplier(5);
console.log(mul3(3));
console.log(mul5(5));

// [!] Function -> Recursive
// function yg memanggil dirinya sendiri sampai berhenti manggil
function countDown(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;
    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}

countDown(5);

// [!] Arrow Function
const square3 = (number) => number * number;

console.log(square3(5));