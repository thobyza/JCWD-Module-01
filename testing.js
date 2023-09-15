

// console.log("10" < "009");

// console.log("Soal Nomor 1 quiz");
// const product = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 10, 15, 11],
// ];
// const duplicationCounter = (product) => {
//     const identifierCount = {};

//     for (let row = 0; row < 4; row++) {
//         for (let col = 0; col < 4; col++) {
//             const identifier = product[row][col];

//             if (identifierCount[identifier]) {
//                 identifierCount[identifier]++;
//             } else {
//                 identifierCount[identifier] = 1;
//             }
//         }
//     }

//     let errorCount = 0;
//     for (const identifier in identifierCount) {
//         if (identifierCount[identifier] > 1) {
//             errorCount += identifierCount[identifier] - 1;
//         }
//     }

//     return errorCount;
// };
// console.log(duplicationCounter(product)); 

const fruits = ["apple", "lemon", "banana"];
let a = b = 0;
fruits.length = b;

console.log(fruits[a]);

/* JAWABAN:
A. 0
B. "lemon"
C. undefined (Benar)
D. "apple"
*/