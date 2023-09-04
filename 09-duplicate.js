/* [9] Write a function to find duplicate values in an array

*/

function duplicateArr(input) {

    input.sort((a, b) => a - b); // 1, 3, 4, 10, 10
    
    let dupArr = [];

    for (let i = 0; i < input.length; i++) {
        
        if (input[i] === input[i - 1]) {
            dupArr.push(input[i]);
        }
    }

    return console.log(dupArr);

}

duplicateArr([10, 1, 3, 4, 10])
// duplicateArr(["a", "b", "c", "d", "a", "c"])

// ** Jwbn kak Ilham
