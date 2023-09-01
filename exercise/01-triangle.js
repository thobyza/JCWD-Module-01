/*
Create a function that can create a triangle pattern according 
to the height we provide like the following :
01
02 03
04 05 06
07 08 09 10
● Parameters : height → triangle height
*/

// function generateTriangle(height) {
//     let totalNumberofRows = height;
//     let penampung = "";

//     for (let i = 1; i <= totalNumberofRows; i++) {
//         for (let j = 1; j <= i; j++) {
//             penampung += `0${j} `
//         }
        
//         console.log(penampung);
//         penampung = "";
//     }
// }

// generateTriangle(4);

// Jawaban kak Ilham

function triangle(num) {
    let counter = 0 //penampung, counter ini yg akan ditambahin
    for (let i = 1; i <= num; i++) {
        let res = "";
        for (let j = 1; j <= i; j++) {
            counter++
            res += `${counter < 10 ? "0" : ""}${counter} `
        }
        console.log(res);
    }
}

triangle(4);





