/*Create an employee base class with subclasses PermanentEmployee and ContractEmp.*/
// Base class
class Employee {
    String name;
    int id;

    void display() {
        System.out.println("Employee Name: " + name);
        System.out.println("Employee ID: " + id);
    }
}

// Permanent Employee subclass
class PermanentEmployee extends Employee {
    double salary;

    void showSalary() {
        System.out.println("Permanent Employee Salary: " + salary);
    }
}

// Contract Employee subclass
class ContractEmp extends Employee {
    double contractAmount;

    void showContractAmount() {
        System.out.println("Contract Amount: " + contractAmount);
    }
}

// Main class
public class Main {
    public static void main(String[] args) {

        PermanentEmployee p = new PermanentEmployee();
        p.name = "Riya";
        p.id = 101;
        p.salary = 50000;

        p.display();
        p.showSalary();

        System.out.println();

        ContractEmp c = new ContractEmp();
        c.name = "Rahul";
        c.id = 102;
        c.contractAmount = 20000;

        c.display();
        c.showContractAmount();
    }
}