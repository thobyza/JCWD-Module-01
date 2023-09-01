// bikin function
// [1, 2, 3, 4, 5] => 15
// argumen -> array, return nya hasil argumen

function arrAddition (arr) {
    let counter = 0;   // penampung

    for (let i = 0; i <= arr.length; i++) {
        counter = counter + i;
    }

    console.log(counter);
}

arrAddition([1, 2, 3, 4, 5]);

// Jawaban kak Ilham
function additional(arr) {
    return arr.reduce((a, b) => a + b)
}

console.log(additional([1, 2, 3, 4]));

// or, with arrow function
const add = (arr) => arr.reduce((a, b) => a + b);

console.log(add([1, 2, 3]));
