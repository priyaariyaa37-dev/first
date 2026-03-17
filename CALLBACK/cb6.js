//replace callback with promise

function getUser() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("User Data");
        },1000);
    });
}

console.log("Before");
console.log(getUser())
console.log("After");

