/* 
[3] Given a non-empty array of integers nums, every element appears twice
 except for one. Find that single one.
● You must implement a solution with a linear runtime complexity and 
use only constant extra space.

*/

function findSingle(arr) {

    arr.sort(); // [1, 1, 2, 2, 4]
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1] || arr[i] !== arr[i - 1]) {
            newArr.push(arr[i])
        }
    }

    return newArr;
}

console.log(findSingle([4, 1, 2, 1, 2]));

// function findSingular(arr) {
//     let result = 0;

//     for (let)
// }

// console.log(findSingular([4, 1, 2, 1, 2]));