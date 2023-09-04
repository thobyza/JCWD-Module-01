/* [02] Write a function that takes an array of words and returns 
a string by concatenating the words in the array, separated by commas 
and - the last word - by an 'and'

Example:
let arrWord = ["book", "pencil", "apple"]

output -> "book, pencil and apple.
*/

function arrJoin (arr) {

    arr.splice(arr.length - 1, 0, "and");
    
    let strOutput = arr.join(", ");
    // return console.log(strOutput);

    for (let i = strOutput.length; i > 0; i--) {
        if (strOutput[i] == ",") {
            strOutput[i].replace("-");
            break;
        }
    }

    return console.log(strOutput);
}

arrJoin(["apple", "orange", "grape", "cherry"]);

// **Jwbn kak Ilham

let arr2 = ["apple", "mango", "orange", "lemon"];

function myFunc(input) {
    let lastWord = input[input.length - 1]; // menampung value terakhir
    input.pop() // menghapus value terakhir
    return input.join(", ") + " and " + lastWord
}

console.log(myFunc(arr2));