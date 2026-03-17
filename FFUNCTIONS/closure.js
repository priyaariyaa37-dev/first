function counter() 
{
    let count = 0;
    return function () 
    {
        count++;
        console.log(count);
    };
}
let myCounter = counter();
myCounter(); // 1
myCounter(); // 2
myCounter(); // 3

