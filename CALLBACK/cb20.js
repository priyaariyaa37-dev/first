/*Create a Bank account class with deposit(), withdraw(), and displayBalance().
Use multiple object for different accounts. */
class BankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(this.name + " deposited:", amount);
  }
  withdraw(amount) {
    this.balance -= amount;
    console.log(this.name + " withdrew:", amount);
  }
  displayBalance() {
    console.log(this.name + " balance:", this.balance);
  }
}
// multiple objects
let acc1 = new BankAccount("Riya", 5000);
let acc2 = new BankAccount("Aman", 3000);
acc1.deposit(1000);
acc1.displayBalance();
acc2.withdraw(500);
acc2.displayBalance();
