/*
Given an floor number, You have to define the highest locker number, 
it must return an array ([0,1]). 0: floor number 1: locker number

Here are the number of lockers for each floors: 
1st floor: 5 lockers --> 1,2,3,4,5 
2nd floor: 6 lockers --> 6,7,8,9,10,11 
3rd floor: 7 lockers --> 12,13,14,15,16,17,18 
4th floor: 5 lockers --> 19,20,21,22,23 
5th floor: 6 lockers --> 24,25,26,27,28,29 
6th floor: 7 lockers --> 30,31,32,33,34,35,36 . . etc.

For example, the highest locker number for 3rd floor is 18, 
then it must return [3,18]

Input: Integer
Output: array
*/

/*
let 
[1, 2, 3, 4, 5]                 -> [0].length = 5
[6, 7, 8, 9, 10, 11]            -> [1].length = 6
[12, 13, 14, 15, 16, 17, 18]    -> [2].length = 7
[19, 20, 21, 22, 23]            -> [3].length = 5
[24, 25, 26, 27, 28, 29]        -> [4].length = 6
[30, 31, 32, 33, 34, 35, 36]    -> [5].length = 7

*/

// function getFloors(floor) {
//   // Write your code here
//   let lockers = 0;
//   let newFloor = 1;

//   while (newFloor <= floor) {
//     lockers += newFloor + 4;
//     newFloor++;
//   }

//   return [floor, lockers];
// }

// console.log(getFloors(6));

// function findHighestLocker(floorNumber) {
//   let lockers = 0;
//   let floor = 1;

//   while (floor <= floorNumber) {
//     lockers += floor + 4; // Each floor has floor + 4 lockers
//     floor++;
//   }

//   return [floorNumber, lockers];
// }

// // Example usage:
// const floorNumber = 6;
// const highestLocker = findHighestLocker(floorNumber);
// console.log(highestLocker); // Output: [3, 18]

function getFloors(floor) {
  // Write your code here
  const lockersPerFloor = [5, 6, 7, 5, 6, 7];
  let highestLocker = 0;

  for (let i = 0; i < floor; i++) {
    highestLocker += lockersPerFloor[i % 3];
    console.log(highestLocker);
  }

  return [floor, highestLocker];
}
console.log(getFloors(3));
