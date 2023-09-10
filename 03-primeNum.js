/*
Prime Number Generation is the process of generating a sequence of 
prime numbers within a specified range. Prime numbers are natural numbers 
greater than 1 that have only two divisors, 1 and itself.

The Prime Number Generation process typically involves checking each number
 within the given range to determine whether it is a prime number or not. 
 Generally, the algorithm used to check for prime numbers involves dividing
  the number by all integers smaller than it, starting from 2 up to the 
  square root of the number. If no divisor produces a whole number quotient 
  during this process, the number is considered prime.

  Input Format: start number & end number
  Output Format: array of number

*/

// function generatePrimes(num1, num2) {
//   // Write your code here

//   let rangeNum = [];
//   for (let i = num1 + 1; i < num2; i++) {
//     rangeNum.push(i);
//   }
//   console.log(rangeNum); // = [21, 22, 23, 24]

//   let rangePrime = [];

//   for (let i = 0; i < rangeNum.length; i++) {
//     // loop thru 21 - 24 (arr [21 ... 24])
//     let primeCount = 0;

//     for (let j = 1; j < rangeNum[i]; j++) {
//       // rangeNum[i] -> 20

//       if (rangeNum[i] % j == 0) {
//         primeCount++;
//       }
//     }

//     if (primeCount == 2) {
//       rangePrime.push(rangeNum[i]);
//     }
//   }

//   return rangePrime;
// }

// console.log(generatePrimes(20, 25));
// generatePrimes(1, 10);

function generatePrimes(num1, num2) {
  // Write your code here

  function isPrime(num) {
    if (num < 2) {
      return false; // 1 is not prime
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }

  let prime = [];
  for (let i = num1; i <= num2; i++) {
    if (isPrime(i)) {
      prime.push(i);
    }
  }
  return prime;
}

console.log(generatePrimes(20, 25));
