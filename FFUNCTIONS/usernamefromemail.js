function getUsername(email) {
    let position = email.indexOf("@");  // Find position of @
    return email.slice(0, position);    // Extract text before @
}

console.log(getUsername("john_doe@yahoo.com"));
