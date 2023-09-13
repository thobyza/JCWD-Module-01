/* source to learn from:
https://www.youtube.com/watch?v=CwhpILAlfjg



*/


function romanToInt(input) {
    const symbol = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        let curr = input[i];
        let next = input[i + 1];

        if (symbol[curr] < symbol[next]) {
            sum -= symbol[curr];
        } else {
            sum += symbol[curr];
        }
    }
    return sum;
}

console.log(romanToInt("MCMXCIV"));