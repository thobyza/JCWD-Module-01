// Write a code to get the number of days in a month
//  Example : month = 1, year = 2022 → 31

// function getNumDays(month, year) {
//     return new Date(year, month, 0).getDate();
// }

const getNumDays = (month, year) => new Date(year, month, 0).getDate();

console.log(getNumDays(2, 2012));