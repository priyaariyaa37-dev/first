//object
const userobj={
    name:"ravneet",
    id:123,
    age:23
};
console.log("Just object:", userobj);

//convert object to JSON
const neujsonobj = JSON.stringify(userobj);
console.log("Object to JSON:", neujsonobj);

//parse back json to object
const abc = JSON.parse(neujsonobj);
console.log("JSON to Object:", abc);

//Simulated API Response Handling
const xyz= `{"id":1677, "city":"amritsar", "data":{"token":"jkl453", "task":"worker"}}`;
const ghi = JSON.parse(xyz);
console.log("Token from response:", ghi.data.task);

