// Write a code to find the sum of the numbers 1 to N.
//       Example : 5 → 1 + 2 + 3 + 4 + 5 = 15

let num = 5;
let result = 1;
let desc = "1";

for (let i = 2; i <= num; i++) {
    result = result + i;
    // console.log(result);
    desc = `${desc} + ${i}`;
    console.log(desc);
}

// console.log(`${num} → ${desc} = ${result}`);


// ^2 sept
// Write a code to find the sum of the numbers 1 to N.
// Example : 5 → 1 + 2 + 3 + 4 + 5 = 15

// let inputNum = 5;
// let penampung = "1";
// let result = 1;

// for (let i = 2; i <= inputNum; i++) {

//     penampung = `${penampung} + ${i}`;
//     console.log(penampung);

//     result = (result + i);
// }

// console.log(`${inputNum} → ${penampung} = ${result}`);