//replace callback with promise

function getUser() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("User Data");
        },1000);
    });
}

console.log("Before");
(getUser())
.then(data=> console.log(data))
.catch(err=> console.log(err));
console.log("After");

