//reverse keys and values
const user = {
  name: "Riya",
  city: "Amritsar",
  role: "Tester"
};
console.log(user);

let reversed = {};

for (let key in user) {
  let value = user[key];
  reversed[value] = key;
}

console.log(reversed);