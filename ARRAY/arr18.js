//convert array of names into uppercase
const names = ["riya", "amit", "sneha", "rahul"];

const upperNames = names.map(function(name) {
    return name.toUpperCase();
});

console.log(upperNames);
