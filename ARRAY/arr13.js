// function merge(arr1, arr2) 
// {
//     var result = [];
//     var i = 0, j = 0;
//     while (i < arr1.length && j < arr2.length) 
//     {
//         if (arr1[i] <= arr2[j]) 
//         {
//             result.push(arr1[i]);
//             i++;
//         } 
//         else 
//         {
//             result.push(arr2[j]);
//             j++;
//         }
//     }
//     while (i < arr1.length) 
//     {
//         result.push(arr1[i]);
//         i++;
//     }
//     while (j < arr2.length) 
//     {
//         result.push(arr2[j]);
//         j++;
//     }
//     return result;
// }
// var a = [1, 3, 5];
// var b = [2, 4, 6];
// console.log(merge(a, b));



var arr1 = [5, 72, 9, 1, 7];
arr1.sort(function(a, b) {
    return a - b;
});
console.log(arr1);

var arr2 = [51, 32, 2, 61, 17];
arr2.sort(function(c, d) {
    return c - d;
});
console.log(arr2);

var ch=[...arr1,...arr2];
ch.sort(function(a,b) 
{
    return a-b;
});
console.log(ch);