function login(username, password) {
    const correctUsername = "admin";
    const correctPassword = "1234";

    if (username === correctUsername && password === correctPassword) {
        console.log("Login Successful");
    } else {
        console.log("Invalid Username or Password");
    }
}

// Test
login("admin", "1234");   // Login Successful
login("admin", "1111");   // Invalid Username or Password
