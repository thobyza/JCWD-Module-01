function getStudent(floor) {
    let result;

    let numFloor = 0;
    let counter = 5;
    let n = 0;

    for (let i = 1; i <= floor; i++) {
        let arrFloor = [];

        for (let j = 0; j < counter; j++) {
            numFloor++;
            arrFloor.push(numFloor);
        }

        arrFloor.unshift(i);
        n++;

        if (n < 3) {
            counter++;
        } else if (n >= 3) {
            counter = 5;
            n = 0;
        }

        result = arrFloor;
    }

    return result;
}

// const output1 = getStudent(1);
const output5 = getStudent(5);
// const output10 = getStudent(10);

// console.log(output1);
console.log(output5);
// console.log(output10);