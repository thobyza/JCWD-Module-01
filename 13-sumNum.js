/* [13] Write a function from a given array of mixed 
data types and return the sum of all the number

*/

function sumNum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        if (typeof arr[i] == "number") {
            sum = sum + arr[i];
        } 

    }
    return console.log(sum);
}

sumNum([1, 'string', null, false, undefined, 2, 'yes', undefined, 1]);

// **Jwbn Kak Ilham

let arr = [1, "a", null, "9", 3, 2]

function myFunc(input) {
    return input.filter(item => typeof item == "number")
    .reduce((a, b) => a + b);
}

console.log(myFunc(arr));