function getUser(callback) {
    setTimeout(()=>{
        console.log("hello")
        callback("User Data");
    },1000);
}

console.log("Before");
 
function data(a)
{
    console.log(a);
}
getUser(data);
console.log("After");