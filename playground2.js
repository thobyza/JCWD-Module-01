
const car = {
    brand: "bmw",
    price: 200000,
    year: "2021",
    model: {
        type: "RR",
        // series: "5"
    },

    sale() {
        console.log("this car is on sale!");
    }
}

console.log(car.brand);
console.log(car["brand"]);

car.sale();

car.origin = "BMW Welt Munich"

console.log(car);

console.log(car.model?.series);

console.log(Object.keys(car));
console.log(Object.keys(car.model));

let arr = ["apple", "mango"];

const data1 = {
    firstName: "John",
    lastName: "Vaughn"
}

const data2 = {
    birthDate: "1998-06-30",
    country: "Canada"
}

console.log({ ...data1, ...data2 });

class Employee {
    constructor(name, age, program) {
        this.name = name;
        this.age = age;
        this.program = program;
    }

    greeting() {
        console.log(`Hello ${this.name}`);
    }
}

const person1 = new Employee("John", 24, "Digital Marketing");
console.log(person1);

class Gender {
    constructor(gender) {
        this.gender = gender
    }
}

class Man extends Gender {
    constructor(name, age) {
        super("male");
        this.name = name;
        this.age = age;
    }
}

let user1 = new Man("Jack", 26)
console.log(user1);

console.log(user1 instanceof Gender);

let arr1 = [1, 2, 3]

console.log(arr1.push(1));

const fruits = ["apple", "orange", "banana", "citrus", "orange"]

const newFruits = new Set(fruits)
console.log(newFruits);

// [!] Module Import
const { myFunc, name } = require(`./playground3`)

console.log(name);
console.log(myFunc(2, 7));
