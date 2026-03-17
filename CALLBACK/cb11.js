//prototype  
function myPromise(){
    return new Promise ((resolve,reject)=>{
let success = false;
        if (success){
            resolve("Task completed")
        }
        else{
            reject("Task failed")
        }
    });
}

async function runTask(){
    try{
        let result = await myPromise();
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}
runTask();