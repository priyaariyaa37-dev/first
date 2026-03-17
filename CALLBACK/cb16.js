//create a custom invalid age exception and throw it from a person if age < 18.
class InvalidAgeException extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidAgeException";
  }
}
function checkAge(age) {
  try {
    if (age < 18) {
      throw new InvalidAgeException("Age must be 18 or above");
    }
    console.log("Valid age:", age);
  } 
  catch (error) {
    console.log(error.name + ":", error.message);
  }
}
checkAge(20);
checkAge(15);