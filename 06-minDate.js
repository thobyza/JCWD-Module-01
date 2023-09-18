//  Write a code to get minimum date from array of dates.

let arrDate = ["2023-06-30", "2023-05-25", "2023-11-07"];

function minDate(inputDates) {
    let datesCont = []

    inputDates.map((item) => {
        datesCont.push(new Date(item))
    });

    let minDate = new Date(Math.min.apply(null, datesCont))

    return minDate;
}

console.log(minDate(arrDate));