/*
Specifications :
○ Create a program to calculate total salary based on employee type
○ There are two types of employee : full-time & part-time
○ Salary for full-time employee : 
    ■ IDR 100.000 / hour
    ■ IDR 75.000 / hour, if the number of working hours per day is more than 6 hours
○ Salary for part-time employee : 
    ■ IDR 50.000 / hour
    ■ IDR 30.000 / hour, if the number of working hours per day is more than 6 
    

 Requirements :
○ Create an Employee as a parent class
○ Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
    ■ Create a method in that class to add working hour per day
    ■ Create a method in that class to calculate total salary
○ Use inheritance concept
*/

/* to understand deeper of the concept, lets try solving this problem
without creating parent class.
*/

class FulltimeEmployee {
    constructor(name, workHoursPerDay) {
        this.name = name;
        this.workHoursPerDay = workHoursPerDay;
    }

    calculateSalary() {
        let hourlyRate = 0;

        if (this.workHoursPerDay < 6) {
            hourlyRate = 100000;
        } else {
            hourlyRate = 75000;
        }31`46---`

        const salary = this.workHoursPerDay * hourlyRate;
        return salary;
    }
}

class ParttimeEmployee {
    constructor(name, workHoursPerDay) {
        this.name = name;
        this.workHoursPerDay = workHoursPerDay;
    }

    calculateSalary() {
        let hourlyRate = 0;

        if (this.workHoursPerDay < 6) {
            hourlyRate = 50000;
        } else {
            hourlyRate = 30000;
        }

        const salary = this.workHoursPerDay * hourlyRate;
        return salary;
    }
}

const emp1 = new FulltimeEmployee("John", 8);
console.log(emp1.calculateSalary());

const emp2 = new ParttimeEmployee("Alice", 5);
console.log(emp2.calculateSalary());


// console.log(emp1);