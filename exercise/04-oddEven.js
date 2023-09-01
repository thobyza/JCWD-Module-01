/*
[4] Write a function to remove all odd numbers in an array and 
return a new array that contains even numbers only

odd numbers -> 
if (i % 2 == 1) {

}

*/

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function checkOdd(numArr) {
    return numArr % 2 !== 1
}

console.log(numArr.filter(checkOdd));

// Jawaban kak Ilham
// > arrow function
let arr = [1, 2, 3, 4, 5, 6, 7]

const even = (array) => array.filter(item => item % 2 === 0)

console.log(even(arr));

// > function biasa
function even2 (array) {
    return array.filter(item => item % 2 === 0)
}

console.log(even2(arr));