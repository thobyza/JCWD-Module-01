// Write a code to find GCD of two numbers → use while.
// source: https://www.programiz.com/javascript/examples/hcf

function findGcd(num1, num2) {
    let count = 0;
    let gcd = 1;

    while (count <= num1 && count <= num2) {
        if (num1 % count == 0 && num2 % count == 0) gcd = count;
        count++;
    }

    return gcd;
}

console.log(findGcd(20, 16));