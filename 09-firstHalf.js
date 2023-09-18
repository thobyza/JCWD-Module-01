// Write a code that copies the first half of an array. 
// With an odd number of array elements, the 
// middle element should belong to the first half

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function firstHalfArr(s) {

//     return s.length % 2 == 0 ? arr.splice(0, arr.length / 2) : arr.splice(0, (arr.length / 2) + 1);

// }


const firstHalfArr = (s) => s.length % 2 == 0 ? arr.splice(0, arr.length / 2) : arr.splice(0, (arr.length / 2) + 1);
console.log(firstHalfArr(arr));