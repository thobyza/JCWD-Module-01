
let arr1 = [16, 21, 18, 23, 1, 4, 8, 9, 11, 1]; // purwadhika
let arr2 = [10, 1, 11, 1, 18, 20, 1, 0, 2, 1, 20, 1, 13] // jakarta batam

console.log(arr1.length);


function convert(arr) {
    // Write your code here
    let newArr = [];

    // let allNum = [
    //     0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 
    //     15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26
    // ];

    let allLett = [
        " ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
        "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
        "u", "v", "w", "x", "y", "z"
    ];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(allLett[arr[i]]);
    }

    return newArr.join("");

}

console.log(convert(arr2));

