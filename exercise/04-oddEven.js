/*
[4] Write a function to remove all odd numbers in an array and 
return a new array that contains even numbers only

odd numbers -> 
if (i % 2 == 1) {

}

*/

let numArr = [2, 6, 3, 8, 17, 20, 1, 3, 23]

function checkOdd(numArr) {
    return numArr % 2 !== 1
}

console.log(numArr.filter(checkOdd));
