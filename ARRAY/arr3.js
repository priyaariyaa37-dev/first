// // Array destructuring
const arr=[12,32,43];
const[a,b,c]=arr;
console.log(a,b,c);

// default value
const[x=1,y=2,z=3]=[100];
console.log("default:",x,y,z);

// skipping
const[first,,third]=[1,2,3];
console.log("skip:",first, third);

// swap
let d=5,e=7;
[d,e]=[e,d];
console.log("swap:",d,e)

// spread operator //copy
num=[1,2,3,4];
const copy=[...num];
console.log("copy:",copy);
copy.push(20);
console.log("copy:",copy);
console.log("orignal:",num);

// merge
const arr3=[1,2,3];
const arr5=[4,5,6];
console.log("merge:",[...arr3,...arr5])

// rest operator
function total(...nums)
{
   return nums.reduce((a,n)=>a+n,0);
}
console.log("rest sum:",total(1,2,3,4));


