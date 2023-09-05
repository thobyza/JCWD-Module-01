// class -> template for creating object

class Student {  // penamaan class -> first letter must be in upperCase (ciri khas)
    name = ""

    //private property, # 
    #age = "" // -> sehingga tidak bisa diakses dari luar
    program = ""

    constructor(name, age, program) {  // seperti function(param1, param2, ..)
        this.name = name;
        this.#age = age;
        this.program = program;
    }

    greeting() {
        console.log(`Hello ${this.name}`);
    }

    // bikin method utk ambil private property
    getAge() {
        console.log(this.#age);
    }
}

// > cara pakai
const student1 = new Student("Jenny", 25, "Digital Marketing"); // keyword new
console.log(student1.name);
student1.greeting();
student1.getAge();

const student2 = new Student("Dino", 23, "UI/UX Design");
console.log(student2.name);
student2.greeting();

// karena sudah dibuat class/ template, sehingga tdk perlu membuat 
// object dari awal satu per satu dgn strukturnya. 
// Tinggal memakai template (class)

const students = [student1, student2];
console.log(students);

// [!] Access Modifier
// # > private property (Ln 6)
// static

// [!] Encapsulation
// membuat method2

class Employee {
    constructor() {
        this.employeeName;
    }

    getEmployeeName() {
        return this.employeeName;
    }

    setEmployeeName(value) {
        this.employeeName = value;
    }
}

const employee1 = new Employee();
employee1.setEmployeeName("John");

console.log(employee1.getEmployeeName());
console.log(employee1.employeeName);

// [!] Inheritance
// satu class mewarisi ke class yg lain
// allows classes to be created based on other classes, 
// thus inheriting the parent’s properties and methods
// > extends, super

class Gender {
    constructor(gender) {
        this.gender = gender;
    }
}

class Man extends Gender { // menandai bahwa dia inherit atau turunan => 'extends'
    constructor(name, age) {
        super("male");       // turunan constructor(gender)
        this.name = name
        this.age = age
    }
}

class Woman extends Gender { // menandai bahwa dia inherit atau turunan => 'extends'
    constructor(name, age) {
        super("female");       // turunan constructor(gender)
        this.name = name
        this.age = age
    }
}

let user1 = new Man("Andy", 25);
let user2 = new Woman("Rosy", 23);
console.log(user1);
console.log(user2);

// [!] Instanceof
// to check whether an object belongs to a certain class
console.log(user1 instanceof Gender); // true
console.log(user1 instanceof Man);  // true
console.log(user1 instanceof Woman); // false
