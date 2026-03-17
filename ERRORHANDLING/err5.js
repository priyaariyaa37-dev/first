//validate username and password
function test(username,pass){
    try {
        if (username!=="riya") {
            throw new Error("Invalid username");
        }
        if (pass!=="12345") {
            throw new Error("Invalid password");
        }
        console.log("Login successful");
    } 
    catch (error) {
        console.log("Error :",error.message);
    }
     finally {
        console.log("Attempt finished");
    }
}
test("riya", "12345");
