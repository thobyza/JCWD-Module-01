// mutable concept

let person = {
    name: "Andi",
    age: 26,
};

let newPerson = person

console.log(person);
console.log(newPerson);

newPerson.name = "James";

console.log(person);
console.log(newPerson);
