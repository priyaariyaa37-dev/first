//basic try and catch
console.log("Program started");
try {
    console.log("inside try block");
    console.log(x);
    console.log("this line will not execute");
}
catch (error) {
    console.log("Error Caught Succesfully!");
    console.log("Error Name:",error.name);
    console.log("Error Message:",error.message);
}
console.log("Program ended")
