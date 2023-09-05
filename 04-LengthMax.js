
function lengthMaximumValue(arr) {
  // Write your code here
  let arrSorted = arr.sort((a, b) => b - a);
  let container = [];

  for (let i = 0; i < arrSorted.length; i++) {
    if (arrSorted[i] == arrSorted[0]) {
      container.push(arr[i]);
    }
  }
  return container;
}


console.log(lengthMaximumValue([10, 11, 12, 11, 10, 10, 10, 12]));

