//create a division calculator that handles Arithmetic Expressions
function divideCalculator(expression) {
  try {
    let result = eval(expression);   // evaluate arithmetic expression
    if (result === Infinity || result === -Infinity) {
      throw "Division by zero not allowed";
    }
    console.log("Result:", result);
  } 
  catch (error) {
    console.log("Error:", error);
  }
}
divideCalculator("10/2");
divideCalculator("20/0");
divideCalculator("12/3 + 4");