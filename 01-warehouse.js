
const arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [7, 14, 15, 1]
];

function duplicationCounter(product) {
    const identifierCount = {};

    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            const identifier = product[row][col];

            if (identifierCount[identifier]) {
                identifierCount[identifier]++;
            } else {
                identifierCount[identifier] = 1;
            }
        }
    }

    let errorCount = 0;
    for (const identifier in identifierCount) {
        if (identifierCount[identifier] > 1) {
            errorCount += identifierCount[identifier] - 1;
        }
    }

    return errorCount;
}

console.log(duplicationCounter(arr));