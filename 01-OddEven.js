
function oddEven(arr) {
    // Write your code here

    let arrOdd = [];
    let arrEven = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            arrEven.push(arr[i]);
        } else {
            arrOdd.push(arr[i]);
        }
    }

    return [arrOdd.length, arrEven.length]

}

console.log(oddEven([10, 11, 12, 13]));


