//finally   
try {
    let num = 10;
    let result = num / 0;   // This will not throw error in JS
    console.log(result);

    console.log(x);  // Error: x is not defined
}
catch (error) {
    console.log("An error occurred:");
    console.log(error.message);
}
finally {
    console.log("This block always runs.");
}
