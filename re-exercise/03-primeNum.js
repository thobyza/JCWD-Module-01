// [3] Write a code to check whether the number is prime number or not
let num = 57;
let divider = 0;

for (let i = 0; i <= 10; i++) {
    if (num % i == 0) {
        divider++;
        // console.log(divider);
    }
}

console.log(`${num} ${divider === 2 ? 'is' : 'is not'} a prime number`);

