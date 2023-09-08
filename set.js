// Set() Data structure

// array that contains duplicate value
const fruits = ["banana", "apple", "mango", "apple", "lemon"];

const newFruits = new Set(fruits); // this only store unique value

console.log(newFruits);

// but Set() doesn't apply to object
const people = {
  name: "John",
  name: "Beck",
  name: "John",
  name: "Beck",
};

const newPeople = new Set(people);
console.log(newPeople);

// Set built-in methods
