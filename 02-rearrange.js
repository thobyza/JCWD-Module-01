
function rearrangeArray(arr) {
    // Write your code here 
    arr.sort()

    let min = arr[0];
    let max = arr[arr.length - 1];

    let between = [];

    for (let i = 1; i < arr.length; i++) {
        between.push((arr[0 + i]), (arr.length - 1 - i))
    }

    return [min, max, between]
}

// console.log(rearrangeArray([2, 1, 4, 3, 5]));


/*
1, 5, 2, 4, 3
1 = min
5 = max
2 = min + 1
4 = max - 1
3 = min + 2
... max - 2

min
(min + 1)
max

*/

function rearrangeArr(arr) {
    arr.sort((a, b) => a - b);

    let left = 0;
    let right = arr.length - 1;
    let result = [];

    while (left <= right) {
        if (left !== right) {
            result.push(arr[left]);
            result.push(arr[right]);
        } else {
            result.push(arr[left]);
        }
        left++;
        right++;
    }
    return result;
}

console.log(rearrangeArr([5, 8, 1, 4, 2, 9, 3, 7, 6]));