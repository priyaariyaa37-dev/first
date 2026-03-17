function testBlockScope()
{
    if (true) 
    {
        let x = 10;   // x is block scoped
        console.log("Inside block:", x);
    }
    console.log("Outside block:", x);  // Error
}
testBlockScope();
