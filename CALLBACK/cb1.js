console.log("start");
function heavytask() {
    for (let i=0; i<10000; i++) {}
    console.log("Heavy Task Done");
}
heavytask();
console.log("End");

//await is used with async  