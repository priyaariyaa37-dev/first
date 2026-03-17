//method overloading using spread operator
class Calculator {
  add(...numbers) {   // spread operator
    let sum = 0;
    for (let num of numbers) {
      sum += num;
    }
    console.log("Sum:", sum);
  }
}

const calc = new Calculator();

calc.add(5, 10);        // 2 arguments
calc.add(5, 10, 15);    // 3 arguments
calc.add(1, 2, 3, 4);   // 4 arguments