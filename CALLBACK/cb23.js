/* Create an employee class with name, id, basicSalary, and 
calculate HRA, DA, and net salary using methods. */
class Employee {
  constructor(name, id, basicSalary) {
    this.name = name;
    this.id = id;
    this.basicSalary = basicSalary;
  }

  calculateHRA() {
    return this.basicSalary * 0.20;   // 20% HRA
  }

  calculateDA() {
    return this.basicSalary * 0.10;   // 10% DA
  }

  calculateNetSalary() {
    return this.basicSalary + this.calculateHRA() + this.calculateDA();
  }

  displaySalary() {
    console.log("Name:", this.name);
    console.log("ID:", this.id);
    console.log("Basic Salary:", this.basicSalary);
    console.log("HRA:", this.calculateHRA());
    console.log("DA:", this.calculateDA());
    console.log("Net Salary:", this.calculateNetSalary());
  }
}

// Create object
let emp1 = new Employee("Riya", 101, 30000);

// Call method
emp1.displaySalary();