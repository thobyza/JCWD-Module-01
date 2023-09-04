/* [10] Write a function to find the difference in 2 given array
*/

function arrDiff(arr1, arr2) {

    let newArr = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            newArr.push(arr1[i]);
            newArr.push(arr2[i]);
        } 
    }

    return newArr;

}

console.log(arrDiff([1, 2, 5], [3, 4, 1]));



