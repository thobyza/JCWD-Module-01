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

/* 
[1] to understand deeper of the concept, lets try solving this problem
without creating parent class.
[2] lets add the parent and make the code that fulfills the requirements. 
*/

class Employee {
  constructor(name) {
    this.name = name;
    this.workingHoursPerDay = 0;
  }

}

class FulltimeEmployee extends Employee {

  addWorkingHours(hours) {
    this.workingHoursPerDay += hours;
  }

  calculateSalary() {
      let hourlyRate = 0;

      if (this.workingHoursPerDay < 6) {
          hourlyRate = 100000;
      } else {
          hourlyRate = 75000;
      }

      const salary = this.workingHoursPerDay * hourlyRate;
      return salary;
  }
}

class ParttimeEmployee extends Employee {

  addWorkingHours(hours) {
    this.workingHoursPerDay += hours;
  }

  calculateSalary() {
      let hourlyRate = 0;

      if (this.workingHoursPerDay < 6) {
          hourlyRate = 50000;
      } else {
          hourlyRate = 30000;
      }

      const salary = this.workingHoursPerDay * hourlyRate;
      return salary;
  }
}

const emp1 = new FulltimeEmployee("Bruno");
emp1.addWorkingHours(8);
console.log(emp1.calculateSalary());

const emp2 = new ParttimeEmployee("Jessy");
emp2.addWorkingHours(5);
console.log(emp2.calculateSalary());



