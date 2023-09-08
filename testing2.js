let arr1 = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  // Write your code here
  let posCount = 0;
  let negCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      posCount++;
    } else if (arr[i] < 0) {
      negCount++;
    } else {
      zeroCount++;
    }
  }

  let sumOfPos = (posCount / arr.length).toFixed(6);
  let sumOfNeg = (negCount / arr.length).toFixed(6);
  let sumOfZero = (zeroCount / arr.length).toFixed(6);

  console.log(sumOfPos);
  console.log(sumOfNeg);
  console.log(sumOfZero);
}

// console.log(plusMinus(arr1));

let newArr = [1, 3, 5, 7, 9];

function miniMaxSum(arr) {
  // Write yourcode here

  let sortedAsce = arr.sort((a, b) => a - b);

  let sortedDesc = arr.sort((a, b) => b - a);

  return console.log([sortedAsce, sortedDesc]);
}

miniMaxSum(newArr);
