// [!] Getter & Setter
let student = {
    firstName: "Woody",
    lastName : "Pecker",

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value) {
        const splittedValue = value.split(" ");
        this.firstName = splittedValue[0];  
        this.lastName = splittedValue[1];
    }

    // getter - setter -> seperti function
    // this -> keyword utk memanggil property dalam sebuah key yg di defined 
    // **always remember this!
}

console.log(student.fullName);

// setter
student.fullName = "Alice Cooper";
console.log(student.fullName);

// [!] Destructuring Assignment

// > array destructuring
let arr = ["apple", "mango"];

let [a, b] = arr
console.log(a);
console.log(b);

// > object destructuring
let fruit = {
    name: "lemon",
    color: "yellow",
}

let { name, color } = fruit

console.log(name); // same as, console.log(fruit.name), 
//                      now u dont need to access with fruit.

// [!] Spread operator
let fruit2 = {
    price: "15000",
    quantity: "10",
}

let fruits = { ...fruit, ...fruit2} // merge 2 object, with spread operator (same as the one for array)
console.log(fruits);

// or you can merge 2 object with Object.assign()
let fruits2 = Object.assign(fruit, fruit2);
console.log(fruits2);