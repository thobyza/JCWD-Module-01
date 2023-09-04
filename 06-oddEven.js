/* [6] Write a function to remove all odd numbers 
in an array and return a new array that contains 
even numbers only
*/

function oddEven(arr) {

    let newArr = []

    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i]);
        }
    }

    return console.log(newArr);
}

oddEven([1, 2, 3, 4, 5, 6, 7]);
