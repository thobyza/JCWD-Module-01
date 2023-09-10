// [1] Employee Salary
class Employee {
  constructor(name) {
    this.name = name;
    this.workingHours = 0;
  }
}

class FulltimeEmployee extends Employee {
  addWorkingHour(hour) {
    this.workingHours += hour;
  }

  calculateSalary() {
    let totalSalary = 0;

    if (this.workingHours <= 6) {
      return (totalSalary += this.workingHours * 100000);
    } else if (this.workingHours > 6) {
      return (totalSalary += 6 * 100000 + (this.workingHours - 6) * 75000);
    }
  }
}

// class ParttimeEmployee extends Employee {}

const person1 = new FulltimeEmployee("Andi");
console.log(person1);

person1.addWorkingHour(7);
console.log(person1);

console.log(person1.calculateSalary());
