/* [7] Write a function to insert multiple given integer (not an array) to an array 
and have a maximum size input. 
The array can only have a maximum size from a given input. 
(if the maximum size of the given input is 5 than the array can only contain 5 elements). 
    a. Example: maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
        i. The function will return [5, 10, 24, 3, 6]

*/

// function arrOutput(maxSize, ...other) {
//     let newArr = [];

//     for (let i = 0; i < maxSize; i++) {
//         newArr.push(other[i]);
//     }

//     return console.log(newArr);
// }

// arrOutput(5, 10, 24, 3, 6, 7, 8);

// ** Jwbn Kak Ilham

function myFunc(maxSize, ...number) {
    return number.slice(0, maxSize);
}

console.log(myFunc(10, 1, 3, 6, 15, 23));

// [!] Rest parameter
// ( ...other) untuk menampung/menyimpan sisa argumen, jika argumen melebihi parameter yg dibuat
// function multiply(a = 1, b = 2, ...other) { //rest param
//     console.log(other);
//     return a * b;
// }

// console.log(multiply(10, 2, 5, 8, 5, 13, 26));