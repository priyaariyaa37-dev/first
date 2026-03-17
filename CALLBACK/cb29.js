/*Create a BankAccount class with a private balance field and method deposit() and 
withdraw() with validation  */
class BankAccount {
    private double balance;   // private field

    // Deposit method
    public void deposit(double amount) {
        if (amount > 0) {
            balance = balance + amount;
            System.out.println("Deposited: " + amount);
        } else {
            System.out.println("Invalid deposit amount");
        }
    }

    // Withdraw method
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance = balance - amount;
            System.out.println("Withdrawn: " + amount);
        } else {
            System.out.println("Invalid or insufficient balance");
        }
    }

    // Display balance
    public void displayBalance() {
        System.out.println("Current Balance: " + balance);
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount();

        acc.deposit(5000);
        acc.withdraw(2000);
        acc.withdraw(4000);

        acc.displayBalance();
    }
}