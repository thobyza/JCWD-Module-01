/* [4] let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
Write a function from the above array of number 
that will return sum of duplicate values

*/

let arr1 =  [10, 20, 40, 10, 50, 30, 10, 60, 10];

function sumDuplicate(arrInput) {
    arrInput.sort((a, b) => a - b); // 1, 3, 4, 10, 10
    
    let dupArr = [];

    for (let i = 0; i < arrInput.length; i++) {
        if (arrInput[i] === arrInput[i - 1]) {
            dupArr.push(arrInput[i]);
        }
    }

    // return dupArr 
    let newArr = dupArr.reduce((a, b) => a + b)
    return newArr

}

console.log(sumDuplicate(arr1));