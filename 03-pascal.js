/* source to learn:
https://www.youtube.com/watch?v=LQUZYf-hr6M

*/

function pascalRows(numRows) {
    if (numRows < 1) return [];
    if (numRows === 1) return [[1]];

    const triangle = [[1]];

    for (let i = 1; i < numRows; i++) {
        let prevRow = triangle[i - 1];
        let curRow = [];

        curRow.push(1);
        // console.log(curRow);

        for (let j = 1; j < prevRow.length; j++) {
            curRow[j] = prevRow[j] + prevRow[j - 1];
        }

        curRow.push(1)
        // console.log(curRow);
        triangle.push(curRow)
    }

    return triangle;
}

console.log(pascalRows(5));