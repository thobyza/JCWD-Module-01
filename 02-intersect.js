/* [2] Create a function to get the intersection of two objects
 Example :
○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
○ Output: { a: 1 }
*/

let obj1 = {
    a: 1,
    b: 2,
}

let obj2 = {
    a: 1,
    c: 3,
}

function intersect(a, b) {

    let container = {};

    for (const key in a) {
        if (a[key] == b[key]) {
            container[key] = a[key];
        }
    }

    return container;
}

console.log(intersect(obj1, obj2));