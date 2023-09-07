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

// creating employee class
class Employee {
    constructor(name) {
      this.name = name;  // this sets the name of the employee when an object is created.
      this.workingHoursPerDay = 0; // // This initializes the workingHoursPerDay to 0 when an object is created.
    }
  
    addWorkingHours(hours) {
      this.workingHoursPerDay += hours; // // This method allows you to add the number of working hours for the employee.
    }
  
    // calculateSalary() {
    //   return 0; // Base class does not have a specific salary calculation, This method is meant to be overridden in the child classes 
    // }
}

class FulltimeEmployee extends Employee {

    calculateSalary() {
      let hourlyRate = 0;

      if (this.workingHoursPerDay > 6) {
        hourlyRate = 75000;
      } else {
        hourlyRate = 100000;
      }

      const salary = hourlyRate * this.workingHoursPerDay;
      return salary;
    }

}

class ParttimeEmployee extends Employee {
    
    calculateSalary() {
        let hourlyRate = 0;
  
        if (this.workingHoursPerDay > 6) {
          hourlyRate = 30000;
        } else {
          hourlyRate = 50000;
        }
  
        const salary = hourlyRate * this.workingHoursPerDay;
        return salary;
      }

}

const employee1 = new FulltimeEmployee("Becky");
const employee2 = new ParttimeEmployee("Dennis");

employee1.addWorkingHours(8);
employee2.addWorkingHours(5);

console.log(employee1.calculateSalary());
console.log(employee2.calculateSalary());