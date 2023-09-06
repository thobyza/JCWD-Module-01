/*
Create a function to merge two array of student data and remove duplicate data
● Student data : name & email
● Example : 
Array1 → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ }, 
{ name: ‘Student 2’, email : ‘student2@mail.com’ }
]

Array2 → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ }, 
{ name: ‘Student 3’, email : ‘student3@mail.com’ }
]

● Result : 
ArrayResult → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ }, 
{ name: ‘Student 2’, email : ‘student2@mail.com’ },
{ name: ‘Student 3’, email : ‘student3@mail.com’ }

*/

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
const arr2 = [student1, student3];

function merge(a, b) {
    
    let merge = [...a, ...b];
    let dup = new Set();

    for (let i = 0; i < merge.length; i++) {

    }

    return merge
}

console.log(merge(arr1, arr2));


