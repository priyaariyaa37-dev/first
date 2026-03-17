class BankAccount
{
   #balance;
   constructor()
   {
    this.#balance=0;
   }
    deposit(amount)
    {
        if (amount > 0)
    {
            this.#balance +=amount;
    }
}
getBalance() {
    return this.#balance;
}
}
const account = new BankAccount();
account.deposit(1000);
account.balance;
console.log(account.getBalance());
//console.log(account.#Balance());         error

 