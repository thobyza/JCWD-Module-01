
// [9] Write a code to find the largest of two given integers


// [10] Write a conditional statement to sort three numbers
let x = 1;
let y = 27;
let z = 6;

if (x < y && x < z) 
{ 
    if (y < z) {
        console.log(`${x}, ${y}, ${z}`);
    } else {
        console.log(`${x}, ${z}, ${y}`);
    }
}
else if (y < x && y < z) 
{
    if (x < z) {
        console.log(`${y}, ${x}, ${z}`);
    } else {
        console.log(`${y}, ${z}, ${x}`);
    }
} 
else if (z < x && z < y) 
{
    if (x < y) {
        console.log(`${z}, ${x}, ${y}`);
    } else {
        console.log(`${z}, ${y}, ${x}`);
    }
}

// [11] Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
let input = "abs";
// console.log(typeof input);

if (typeof input == "string") {
    console.log("1");
} else if (typeof input == "number") {
    console.log("2");
} else {
    console.log("3");
}

// [12] Write a code to change every letter a into * from a string of input
// Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`

// let strInput = "An appla"

// for (let i = 0; i <= strInput.length; i++) {
//     if (strInput.charAt(i) == "a") {
//         console.log(strInput.replace("a", "*"));
//     } else {

//     }
// }

let strInput = "An apple a day keeps the doctor away"

console.log(strInput.toLowerCase("").replaceAll("a", "*"));

