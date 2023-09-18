// Write a code to count the number of days passed since beginning of the year
let date = new Date("2023-06-30")

function daysPassed(inputDate) {
    let beginOfYear = new Date("2023-01-01");
    let result = (inputDate - beginOfYear) / (1000 * 60 * 60 * 24);

    return result;
}

console.log(daysPassed(date));