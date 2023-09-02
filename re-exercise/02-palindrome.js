// [2] Write a code to check whether a string is a palindrome or not.
/*
kondisi ->  i (yg sedang di check) = word.length - i  xxx

kondisi -> if, word = word.reverse 


*/

let word = "kataku";
let container = "";

for (i = word.length - 1; i >= 0; i--) {
    container = container + word[i];
    // console.log(container);
}

if (container === word) {
    console.log(`${word} is a palindrome`);
} else {
    console.log(`${word} is not a palindrome`);
}
