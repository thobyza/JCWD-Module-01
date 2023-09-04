/* [5] Write a function that adds an element to the end 
of an array. However, the element should only 
be added if it is not already in the array

*/

function arrAdd (arrInput, numToAdd) {
    
    if (arrInput.includes(numToAdd) == true) {
        console.log(`${numToAdd} is already in the array`);
    } else {
        arrInput.push(numToAdd);
    }
    
    return console.log(arrInput);
}

arrAdd(["john", "becky", "adam"], "adam");

// **Jwbn kak Ilham

/*
negasi -> ! (kalau tidak butuh else, bisa pakai negasi)
true = true
!true = false
false = false
!false = true

*/




// ...

// let arr = [1, 2, 3]
// let numToAdd = 7;

// arr.map((item, index) => {

//     if (numToAdd == item) {
//         console.log(`${numToAdd} is already in the array, at index ${index}`);
//     } else if (numToAdd !== item) {
//         arr.push(numToAdd);
//     }

//     return arr;
// });

// console.log(arr);

// city.map((item, index) => {
//     console.log(`${item} ada di index ke ${index}`);
// });


//...

// let arr = [1, 2, 3]
// let numToAdd = 7;

// console.log(arr.push(numToAdd));

// arr.push(numToAdd);
// console.log(arr);


// for (let i = 0; i <= arr.length; i++) {
    
//     if (numToAdd == arr[i]) {
//         console.log(`${numToAdd} is already in the array`);
//         break;
//     } else if (numToAdd !== arr[i]) {
//         arr.push(numToAdd);
//     }

//     console.log(arr);
// };




