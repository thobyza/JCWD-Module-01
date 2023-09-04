/* [4] Write a function to calculate each element in the same position from two arrays of integer. 
Assume both arrays are of the same length.
a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

-

*/

// function arrAddition(arr1, arr2) {

//     for (let i = 0; i < arr1.length; i++) {
//         arr1[i] = arr1[i] + arr2[i];
//     }

//     return console.log(arr1);
// }

// arrAddition([1, 2, 3], [3, 2, 1]);

// **Jwbn kak Ilham

let arr = [1, 2, 3];
let arr2 = [3, 2, 1]

function myFunc(a, b) {
    return a.map((item, index) => item + b[index]);
}

console.log(myFunc(arr, arr2));