// [5] Write a code to find factorial of a number.
// 5! -> 5 x 4 x 3 x 2 x 1 = 120

// let num = 5;
// let result = 1; //untuk nampung hasil factorial

// let desc = num;    //untuk nampung string factorial (5 x 4 x 3 x2 x 1)

// for (let i = num; i > 1; i--) {
//     result = result * i;
//     // console.log(result);
//     desc = `${desc} x ${i - 1}`;
    
//     console.log(desc);
// }

// console.log(`${num}! → ${desc} = ${result}`);

// [5] Write a code to find factorial of a number.
// 5! -> 5 x 4 x 3 x 2 x 1 = 120

let num = 5;
let penampung = `${num}`;
let result = 1

for (let i = num; i > 1; i--) {
    penampung = `${penampung} x ${i - 1}`
    console.log(penampung);

    result = result * i;
}

console.log(`${num}! -> ${penampung} = ${result}`);