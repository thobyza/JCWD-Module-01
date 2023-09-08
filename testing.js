// let arr1 = [16, 21, 18, 23, 1, 4, 8, 9, 11, 1]; // purwadhika

// let allLet = [
//     " ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
//     "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
//     "u", "v", "w", "x", "y", "z"
// ];

// let newArr = [];

// newArr.push(allLet[arr1[0]]);

// console.log(newArr);

let arr1 = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];


function aVeryBigSum(ar) {
    // Write your code here
    
    let sumNum = ar.reduce((a, b) => a + b);

    return sumNum;

}

console.log(aVeryBigSum(arr1));

