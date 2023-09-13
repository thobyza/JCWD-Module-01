

function findMaxNum(arr) {
    // Write your code here
    return arr.sort((a, b) => b - a).join("");


}

console.log(findMaxNum([1, 2, 3, 4, 5, 6, 7]));