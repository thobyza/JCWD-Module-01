// [5] Write a code to remove the first occurrence of a given “search string” from a string
//     Example : string = “Hello world”, search string = “ell” → “Ho world”


// [6]  Write a code to capitalize the first letter of each word in a string
//      Example : “hello world” → “Hello World”


// console.log(inputStr.charAt(0));

// for (let i = inputStr.length; i >= 0; i--) {
//     // console.log(i);

//     if (inputStr[i - 1] == " ") {
//         console.log(inputStr[i].toUpperCase() + inputStr.substring(1));
//     } 
// }

// [7] Write a code to reverse a string.

// [8] Write a code to swap the case of each character from string 
//     Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
let str = "ThObY aThAyA";
let newInput = "";

for (let i = 0; i < str.length; i++) {

    if (str[i] == str[i].toUpperCase()) {
        newInput = newInput + str[i].toLowerCase(); // "" = "" + T
    } else {
        newInput = newInput + str[i].toUpperCase();
    }
}

console.log(newInput);

// "" = "" + T -> "T"
// tH