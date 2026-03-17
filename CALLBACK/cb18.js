//create a bank withdrawal system that throws insufficient balance if withdrawal > balance. 
function withdraw(balance, amount) {
  try {
    if (amount > balance) {
      throw "Insufficient Balance";
    }
    balance = balance - amount;
    console.log("Withdrawal successful");
    console.log("Remaining Balance:", balance);
  } 
  catch (error) {
    console.log("Error:", error);
  }
}
withdraw(5000, 2000);
withdraw(3000, 4000);