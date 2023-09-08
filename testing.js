// HackerRank Diagonal

let arrNew = [
  [11, 2, 4], // arr[0][0]
  [4, 5, 6], // arr[1][1]
  [10, 8, -12], // arr[2][2]
];

// array for diag 1 -> arr[0][0], arr[1][1], arrNew[2][2]
// array for diag 1 -> arr[0][2], arr[1][1], arrNew[2][0]

function diagonalDifference(arr) {
  // Write your code here
  let diag1 = [];
  let diag2 = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      diag1.push(arr[i][j]);
      //   console.log(arr[i][j]);
    }
  }

  return diag1;
}

console.log(diagonalDifference(arrNew));
