// Write a code to check whether the date is a weekend
let dates = new Date("2023-09-16")

function isWeekend(inputDate) {
    let res = "";

    inputDate.getDay() === 0 || inputDate.getDay() === 6 ? res = "it's weekend" : res = "it's not weekend";

    return res;
}

console.log(isWeekend(dates));
