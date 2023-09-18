// Write a code to calculate age

let birthDate = new Date("2000-06-30")

function calculateAge(input) {
    return Math.floor((new Date() - input) / (1000 * 60 * 60 * 24 * 30 * 12));
}

console.log(calculateAge(birthDate));