// [8] Write a code to swap the case of each character from string 
// Example : ‘The QuiCk BrOwN FoX’ -> ‘ tHE qUIcK bRoWn fOx’

let str = "The QuiCk BrOwN FoX";
let returnStr = "";

for (let i = 0; i < str.length; i++) {

    if (str[i] === str[i].toUpperCase()) {
        returnStr = returnStr + str[i].toLowerCase();
    } else if (str[i] === str[i].toLowerCase()) {
        returnStr = returnStr + str[i].toUpperCase();
    }

    // console.log(returnStr);
}
console.log(returnStr);
