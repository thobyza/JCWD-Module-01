
const student1 = {
    name: "Andy",
    email: "andy@mail.com",
}

const student2 = {
    name: "Bella",
    email: "bella@mail.com",
}

const student3 = {
    name: "John",
    email: "john@mail.com",
}


const arr1 = [student1, student2];
const arr2 = [student3, student2]

console.log(arr1, arr2);
console.log("------");
console.log(...arr1, ...arr2);