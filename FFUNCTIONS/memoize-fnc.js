function memoizedSquare() 
{
    let cache = {};   // stores previous results
    return function (num) 
    { 
        if (cache[num] !== undefined) 
        {
            console.log("From Cache");
            return cache[num];
        } 
        else 
        {
            console.log("Calculated");
            let result = num * num;
            cache[num] = result;   // store result
            return result;
        }
    };
}
const square = memoizedSquare();
console.log(square(5));  // Calculated → 25
console.log(square(5));  // From Cache → 25
console.log(square(6));  // Calculated → 36
console.log(square(6));  // From Cache → 36

