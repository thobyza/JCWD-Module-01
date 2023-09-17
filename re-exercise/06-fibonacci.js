// [6] Write a code to print the first N fibonacci numbers
/* 
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610,

i = (i - 1) + (i - 2)
i = (i) + (i - 1)
*/


function printFibonacci(n) {
    res = [0, 1, 1];

    if (n < 3) {
        return res.slice(0, n).join(", ")
    } else {
        for (let i = 2; i < n - 1; i++) {
            res.push((res[i]) + (res[i - 1]))
        }
        return res.join(", ");
    }

}

console.log(printFibonacci(10));


