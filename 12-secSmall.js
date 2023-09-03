/* [12] Write a function from a given array of numbers and 
return the second smallest number

-> sort array -> get the 2nd index
*/

// let arr = [10, 5, 23, 15, 8, 28];

// arr.sort((a, b) => a - b);

// console.log(arr);

function arrSecondSmall(arr) {
    
    arr.sort((a, b) => a - b);
    console.log(arr[1]);
}

arrSecondSmall([10, 5, 23, 15, 8, 28]);
