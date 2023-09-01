/*
● Create a function that can loop the number of times according to the input we provide, and will 
replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with 
"FizzBuzz".
● Parameters : n → total looping
*/

// function fizzBuzz(num) {   //num → total looping
    
//     let penampung = " ";

//     for (let i = 0; i <= num; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             penampung = penampung + "FizzBuzz";
//         } else if (i % 3 == 0) {
//             penampung = penampung + "Fizz";
//         } else if (i % 5 == 0) {
//             penampung += "Buzz";
//         } else {
//             penampung += i;
//         }

//     }

//     return penampung;
// }

// console.log(fizzBuzz(10));

// let num = 15;
// let penampung = " ";

// for (let i = 1; i <= num; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         penampung += " FizzBuzz,";
//     } else if (i % 3 == 0) {
//         penampung += " Fizz,";
//     } else if (i % 5 == 0) {
//         penampung += " Buzz";
//     } else {
//         penampung += ` ${i},`;
//     }
    
//     console.log(penampung);
// }

function fizzBuzz (num) {
    
    let penampung = "";

    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            penampung += " FizzBuzz,";
        } else if (i % 3 === 0) {
            penampung += " Fizz,";
        } else if (i % 5 === 0) {
            penampung += " Buzz,";
        } else {
            penampung += ` ${i},`;
        }
        
        console.log(penampung);
    }
}

fizzBuzz(15);

// Jawaban kak Ilham
