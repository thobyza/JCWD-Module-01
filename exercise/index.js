// refreshing materi

console.log(Boolean(0)); // falsy
console.log(Boolean(+"0")); // falsy, conversion string to number -> 0
console.log(Boolean([].length)); // falsy (karena = 0)

// Boolean(0) -> falsy
const stud1 = {
    name: "Budi",
    age: 21,
}

console.log(stud1.name);
console.log(stud1["name"]);

// Pemanggilan object, 2 cara