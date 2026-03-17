function fetchData() {
return new Promise(resolve => {
setTimeout(() => resolve("Data loaded"), 2000);
});
}
async function getData() {
console.log("Start");
let data = await fetchData();
console.log(data); 
console.log("End");
}
getData();
