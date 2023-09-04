/* [8] Write a function that will combine 2 given array into one array
*/

function arrCombine(arr1 ,arr2) {
    
    let newArr = arr1.concat(arr2);
    return console.log(newArr); 
}

arrCombine(["Apple", "Mango", "Banana"], ["Orange", "Grape", "Kiwi"])

// ** Jwb kak Ilham
let arrA = [1, 2, 3];
let arrB = ["a", "b", "c"];

function myFunc(a, b) {
    return [...a, ...b];
}

console.log(myFunc(arrA, arrB));