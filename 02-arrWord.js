/* [02] Write a function that takes an array of words and returns 
a string by concatenating the words in the array, separated by commas 
and - the last word - by an 'and'

Example:
let arrWord = ["book", "pencil", "apple"]

output -> "book, pencil and apple.
*/

function arrJoin (arr) {

    // let start = arr.length - 1;
    // let deleteCount = 0;

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


