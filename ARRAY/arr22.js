//find index if first negative number
const arr = [10, -45, 60, -30, 80];

const result = arr.find(function(num) {
  return num<0;
});

console.log(result);
