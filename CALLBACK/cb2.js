console.log("start");
function heavytask() {

   setTimeout(()=>{
   console.log("Heavy Task Done")
},5000)
}

heavytask();
console.log("End");
