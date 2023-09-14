function rotateArray(arr, k) {
    // Write your code here
    let right = arr.splice(-k);

    let newArr = arr;

    let left = right.concat(newArr)

    return left;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));

// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// console.log(arr.splice(-k));