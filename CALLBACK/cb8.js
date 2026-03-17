let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("User Data");
    },1000);
})

let promise1 = new Promise((resolve,reject)=>{
    setInterval(()=>{
        reject("Error");
    },1000);
})

promise.then(data=>console.log(data));
promise1.then(err=>console.log(err));