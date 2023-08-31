// [2] Write a code to check whether a string is a palindrome or not!
// palindrome example : K A T A K

// 1
let word = "katak";
let reverseWord = "";

for (let i = word.length - 1; i >= 0; i--) {
    // console.log(i);
    reverseWord += word[i];
}

if (word == reverseWord) {
        console.log("this is a palindrome.");
    } else {
        console.log("this is not a palindrome.");
}

// [3] Write a code to convert centimeter to kilometer!
// 1 km = 100000 cm
let cm = 500;
let km = cm / 100000;

console.log(`${cm} cm = ${km} km`);

// [4] Write a code to format number as currency (IDR)
//        Example : 1000 → “Rp. 1.000,00”

// let rupiah = "Rp."
let inputIdr = 20000;

console.log("Rp.".concat(" ", inputIdr, ",00"));



