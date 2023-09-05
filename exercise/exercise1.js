
class Student {
    name = "";
    email = "";
    dateInput = "";
    score = "";
    
    constructor(name, email, dateInput, score) {
        this.name = name;
        this.email = email;
        this.dateInput = dateInput;
        this.score = score;
    }

    age() {
        let now = new Date();
        let birthDate = new Date(this.dateInput)

        let newDate = now - birthDate; // result in Miliseconds
        let newDateinYear = newDate / (1000 * 60 * 60 * 24 * 365);

        return this.dateInput = newDateinYear;
    }

     
}

const student1 = new Student("Andy", "andy@gmail.com", "2000-06-03", 80);
// const student3 = new Student("Jenny", "jenny@hotmail.com", 23, 90);
// const student2 = new Student("Donny", "donny@gmail.com", 24, 85);

console.log(student1);
// console.log([student1, student2, student3]);

// let AllStudent = [student1, student2, student3];
// console.log(AllStudent);

// function myFunc(arr) {

// }

// myFunc(AllStudent);
