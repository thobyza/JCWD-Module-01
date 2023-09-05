
let now = new Date()
let birthDate = new Date("2000-06-30")

let newDate = now - birthDate;  // result in ms

let newDateinYear = newDate / (1000 * 60 * 60 * 24 * 365)

console.log(Math.floor(newDateinYear));