/* Mini-max Sum
https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
*/

/* birthday-cake-candles
https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true
*/

let arr = [3, 2, 1, 3];
// let cont = [];

function birthdayCakeCandles(candles) {
  // Write your code here
  let sortedArr = candles.sort((a, b) => b - a);
  let container = [];

  for (const item of sortedArr) {
    if (item === sortedArr[0]) {
      container.push(item);
    }
  }

  return container.length;
}

console.log(birthdayCakeCandles(arr));

/* Grading-student
https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true
*/

function gradingStudents(grades) {
  // Write your code here
  let newGrade = 0;
  let roundedGrade = Math.ceil(grades / 5) * 5;

  if (roundedGrade - grades < 3) {
    newGrade = roundedGrade;
  } else if (roundedGrade - grades >= 3) {
    newGrade = grades;
  } else if (grades < 38) {
    newGrade = grades;
  }

  return newGrade;
}

console.log(gradingStudents(67));

// Math.ceil(x / 5) * 5
