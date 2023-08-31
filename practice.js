/* SOAL 1
5 x 1 = 5
5 x 2 = 10
....
....
5 x 10 = 50
*/

let i = 1;
while (i <= 10) {
    console.log(`5 x ${i} = ${5 * i}`);
    i++;
}

// 
let num = 7;

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

/* SOAL 2
1 adalah bilangan ganjil
2 adalah bilangan genap
....
....
10 adalah bilangan genap
*/

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 1) {
        console.log(`${i} adalah bilangan ganjil`);
    } else {
        console.log(`${i} adalah bilangan genap`);
    }
}

// OR, using ternary
for (let i = 1; i <= 10; i++) {
    console.log(i % 2 == 1 ? `${i} adalah bilangan ganjil` : `${i} adalah bilangan genap` )
}

for (let i = 1; i <= 10; i++) {
    console.log(`${i} adalah bilangan ${i % 2 == 0 ? "genap" : "ganjil"}`);
}