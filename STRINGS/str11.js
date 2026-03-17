function getUsername(email) {
    let parts = email.split("@");   // Split at @
    return parts[0];                // Return first part
}

console.log(getUsername("riya123@gmail.com"));
