
function footballMatch(arr) {
    // Write your code here
    let win = Math.floor(arr[1] / 3); // 8
    let draw = arr[1] % 3; // 1
    let lose = arr[0] - (win + draw); // 

    // 

    return [win, draw, lose];

}

console.log(footballMatch([11, 25])); // [num of matches, points]

// 

function footballMatch2(arr) {
    // Write your code here
    return [Math.floor(arr[1] / 3), arr[1] % 3, arr[0] - ((Math.floor(arr[1] / 3)) + (arr[1] % 3))];

}

console.log(footballMatch2([11, 25])); // [num of matches, points]

