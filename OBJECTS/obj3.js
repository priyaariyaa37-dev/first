//Array destructing
const browsers = ["chrome","firefox"];
const [b1, b2] = browsers;
console.log("Browsers:",b1, b2);

//Object destructing
const tes = { name: "Riya", role:"QA"};
const {name,role}= tester;
console.log("Tes:", name, role);

//Default value + renaming
const tester = { name: "Riya", role:"QA", Age:23, Colour:"black"};
const {city = "Delhi", role:job, Colour:fav} = tester;
console.log("city:", city);
console.log("Renamed Role:", job);
console.log("Renamed colour:", fav);
