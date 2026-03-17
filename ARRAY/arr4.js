// Array creation methods
console.log("Array.of:",Array.of(1,2,3));
console.log("Array.from:",Array.from("abc"));
console.log("new array:",new Array(5));

//fill method
arr=new Array(5).fill(0);
console.log("fill:",arr);

//use map
arr=new Array(4)
.fill(null)
.map((_,i)=>i+1);
console.log("map:",arr);

//sequence generation
const sequence=Array.from({length:5},(v,i)=>i+1);
console.log("sequence:",sequence);
//***ARRAY CREATION ENDS***//

// reverse an array
const nums=[1,2,3,4];
const reversed=[...nums].reverse();
console.log("reverse:",reversed);

// remove duplicates
const unique=[...new Set([1,2,2,3,4])];
console.log("unique:",unique);

// max value
const max=Math.max(...a(1,2,3,4));
console.log("max:",max);

// frequency count
const freq={};
dup=[1,2,2,3,4];
dup.forEach(v=>
    {
        freq[v]=(freq[v]||0)+1;
    });
console.log("freq:",freq);

// caching length
const num1=[1,2,3,4];
for(let i=0,len=num1.length;i<len;i++)
{
    console.log(num1[i],i);
}