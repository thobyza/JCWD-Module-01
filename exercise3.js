// [4] Write a code to find the sum of the numbers 1 to N.
//       Example : 5 → 1 + 2 + 3 + 4 + 5 = 15
let numberN = 5;
let resultN = 0;

for (let i = 1; i <= numberN; i++) {
    resultN = resultN + i;
    if (i < numberN) continue;
    console.log(resultN);
}
// **Jawaban Kak Ilham
let num = 5;
let counter = 1;
let desc = "1";

for (let i = 2; i <= num; i++) {
    desc += ` + ${i}` //concat
    // console.log(desc);
    counter += i;
}

console.log(`${num} → ${desc} = ${counter}`);


// [5] Write a code to find factorial of a number!
//      Example : 1 x 2 x 3 x 4 x 5 = 120
//      5! → 5 x 4 x 3 x 2 x 1 = 120



// let factorialNumber = 5;
// let result = 1;

// for (let i = 1; i <= factorialNumber; i++) {
//     result = result * i;
//     if (i < factorialNumber) continue;
//     console.log(result);
// }

let num2 = 5;
let counter2 = 1;
let desc2 = "";

for (let i = num2; i >= 1; i--) {
    desc2 += ` x ${i}` 
    counter2 = counter2 * i;
} 

console.log(`${num2}! → ${desc2} = ${counter2}`);

// **Jawaban Kak Ilham
let num3 = 6;
let counter3 = 1;
let desc3 = num3; //menyamakan num

for (let i = num3; i > 1; i--) {
    desc3 += ` x ${i - 1}`;
    counter3 *= i;
}

console.log(`${num3} -> ${desc3} = ${counter3}`);







