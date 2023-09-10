/*
The leap year checker is a program or function that determines 
whether a given year is a leap year. A leap year is a year that has an extra day, February 29th, 
making it 366 days instead of the usual 365 days. The purpose of the leap year checker is to identify 
whether a given year meets the criteria to be classified as a leap year.

-
Leap Year Rules:
- must be evenly divisible by 4;
    - If the year can also be evenly divided by 100, it is not a leap year;
unless...
- The year is also evenly divisible by 400. Then it is a leap year.

*/
let num = 2021;

function isLeapYear(year) {
  // Write your code here

  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

console.log(isLeapYear(num));
