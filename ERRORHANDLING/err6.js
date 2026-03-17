class LoginError extends Error {
    constructor(message) {
        super(message);
        this.name = "LoginError";
    }
}
class Login {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    check() {
        try {
            if (this.username !== "david") {
                throw new LoginError("Invalid username");
            }
            if (this.password !== "test123") {
                throw new LoginError("Invalid password");
            }
            console.log("Login successful");
        } catch (error) {
            console.log(error.name + ":", error.message);
        } finally {
            console.log("Attempt finished");
        }
    }
}
new Login("david", "test123").check();
