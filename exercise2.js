// [3] Write a code to check whether the number is prime number or not

// JavaScript program to check if a number is prime or not

const num = 15;
let isPrime = true;

if (num === 1) 
    console.log("1 is neither prime nor composite number.");

// check if num is greater than 1
else if (num > 1) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
    
     if (isPrime) 
        console.log(`${num} is a prime number`);
     else 
        console.log(`${num} is a not prime number`);
}
else 
    console.log("The number entered by the user is not a prime number.");

// **Jawaban kak Ilham:
let number = 9;
let divider = 0; //pembagi

for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
        divider++;   //increment, ditambahkan setiap kali hasil modulus sama dengan 0 (prime number memiliki 2 divider/pembagi)
    }
}
// jika divider/pembagi hanya 2 maka adalah prime number
console.log(`${number} ${divider === 2 ? 'is' : 'is not'} a prime number`);
