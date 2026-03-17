const prompt = require("prompt-sync")();
let totalbill = Number(prompt("Enter your Total Bill : "));
if (totalbill > 1000) {
  let discount = (totalbill * 10) / 100;
  let finalbill = totalbill - discount;
  console.log("Your 10% Discount is : @" + discount);
  console.log("Your Final Bill after 10% discount is : " + finalbill);
}