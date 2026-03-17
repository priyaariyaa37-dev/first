//custom error class
class validationError extends Error{
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
function validateEmail(email){
    if(!email.includes("@"))
    {
        throw new validationError("Invalid email format");
    }
    return "Valid email";
}
try{
    let result=validateEmail("asjbhds.com");
    console.log(result);
} catch(error){
    if(error instanceof validationError)
        console.log("Error :",error.message);
    else
        console.log("Unknown error",error.name);
}