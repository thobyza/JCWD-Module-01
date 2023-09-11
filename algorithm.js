/* [!] Big O Notation
time complexity
space complexity 
-> efficieny in your code
bagusnya: memori sedikit yg dipakai dan waktunya cepat

example:
- 2 loopings are already too much for efficiency
- declaring many variables in a function to store the values
- for... looping in an array (linear search), because it will iterate through all array index (array length)
*/

/*Example Case
● check if an input (array) contains duplicate 
● Input array are not sorted
● Return true if there are duplicate data
● Return false if there are no duplicate data
*/

// Brute Force
// > Time complexity O(N2)
function checkDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}

console.log(checkDuplicate([1, 2, 3, 1]));

// Optimize with Extra Memory
// > Time Complexity O(N)
// > Space Complexity O(N)
function checkDuplicate2(arr) {
  const uniqueData = new Set(); // Set is a built-in JavaScript data structure
  // that stores unique values, meaning it cannot contain duplicates.
  for (let i = 0; i < arr.length; i++) {
    if (uniqueData.has(arr[i])) return true;
    else uniqueData.add(arr[i]);
  }
  return false;
}

console.log(checkDuplicate2([1, 2, 3, 1]));

// Optimize without Extra Memory
// > Time Complexity O(N Log N)
// most efficient : doesn't store values to new variable, only has 1 looping
function checkDuplicate3(arr) {
  arr.sort();
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) return true;
  }
  return false;
}

console.log(checkDuplicate3([5, 1, 3, 1]));

// [!] Search Algorithm
// https://www.geeksforgeeks.org/searching-algorithms/

// Linear Search example
function search(arr, x) {
  let i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return `${x} is at index ${i}`;
    }
  }
  return -1;
}

console.log(search([2, 20, 10, 3], 10));

// Binary Search example
// this is without looping, so its more efficient
// but today there's built-in function: indexOf
function binarySearch(arr, l, r, x) {
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2);

    if (arr[mid] == x) return mid;

    if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x);

    return binarySearch(arr, mid + 1, r, x);
  }

  return -1;
}

let arr = [2, 3, 4, 10, 40];
let x = 10;
console.log(binarySearch(arr, 0, arr.length - 1, x));

// [!] Sort Algorithm
// Bubble Sort example
// dengan membandingkan value satu-satu, value 1 dan yg disebelahnya
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        /*
                 arr = [4, 3]
                 [4, 3] = [3, 4]
                */
      }
    }
  }
  return arr;
}

console.log(bubbleSort([10, 20, 5, 15, 32]));

// Selection Sort example

function selectionSort(arr) {
  let min;
  for (let i = 0; i < arr.length; i++) {
    min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }

    if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

console.log(selectionSort([29, 72, 13, 87, 66, 52, 51]));
