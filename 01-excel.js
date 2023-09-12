/*
A -> 1
B -> 2
C -> 3
...


*/


// let str = "Hello"

// console.log(str.charCodeAt(0));


// You can use charCodeAt() to convert characters to their numeric values, 
// as shown in the previous explanation for converting Excel sheet column titles
//  to column numbers.For example, to get the numeric value of 'B' relative to 'A',
//   you can do:

// let charA = 'A';
// let charB = 'Z';

// let numericValueB = charB.charCodeAt(0) - charA.charCodeAt(0) + 1;
// console.log(numericValueB); // Output: 

function convertExcel(input) {
    input = input.toUpperCase();
    let result = 0;

    for (let i = 0; i < input.length; i++) {
        result *= 26;
        result += input[i].charCodeAt(0) - "A".charCodeAt(0) + 1;
    }

    return result;
}

console.log(convertExcel("AB"));


// --------

function convertExcel(input) {
    // Convert the input string to uppercase to handle both uppercase and lowercase letters.
    input = input.toUpperCase();
    // Initialize a variable to store the result.
    let result = 0;

    // Iterate through each character in the input string.
    for (let i = 0; i < input.length; i++) {
        // Multiply the current result by 26 (base 26).
        result *= 26;

        // Calculate the numeric value of the current character.
        // Subtract the Unicode value of 'A' from the Unicode value of the current character,
        // then add 1 to get the position of the character in the alphabet.
        let charValue = input[i].charCodeAt(0) - "A".charCodeAt(0) + 1;

        // Add the calculated numeric value to the result.
        result += charValue;
    }

    // Return the final result, which represents the column number.
    return result;
}

// Test the function with the input "AB" and log the result.
console.log(convertExcel("Zc"));
