
// console.log(Math.floor(11 / 3));

// console.log(Math.floor(2 / 3));

// console.log([5, 7] <= [13, 4]);

// 

// let arr1 = [5, 8, 1, 4, 2, 9, 3, 7, 6];

// function meanderArray(input) {
//     let sorted = input.sort((a, b) => a - b);
//     let output = [];

//     for (let i = 0; i < input.length + 2; i++) {
//         output.push(sorted.pop());
//         output.push(sorted.shift());
//     }
//     console.log(output);
//     return output;
// }

// meanderArray(arr1);


let unsortedArr = [5, 3, 1, 2, 4]

function meanderArray(s) {
    let sorted = s.sort((a, b) => a - b);
    let output = [];

    for (let i = 0; i < s.length + 2; i++) {
        output.push(sorted.pop());
        output.push(sorted.shift());
    }
    console.log(output);
    output.pop();
    return output;
}

meanderArray(unsortedArr);