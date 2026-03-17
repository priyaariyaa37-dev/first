let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("userdata");
    },1000);
})
async function getUser() {
    return promise;
}
console.log("Before");
console.log(getUser());
getUser().then(data=>console.log(data));