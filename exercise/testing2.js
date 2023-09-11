function miniMaxSum(arr) {
  // Write your code here
  let arr1 = arr;
  let arr2 = arr;

  arr1.sort((a, b) => b - a);

  return [arr1, arr2];
}

console.log(miniMaxSum([1, 3, 5, 7, 9]));
