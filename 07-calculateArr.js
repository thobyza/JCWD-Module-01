// ● Write a code that calculates the sum of all elements 
// of a two-dimensional array

let newArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function calculateArr(input) {
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            sum += input[i][j];
        }
    }
    return sum;
}

console.log(calculateArr(newArr));