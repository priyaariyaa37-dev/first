//hoisting behaviour
var a = 10;
function test()
{
console.log("Hello I am a function")
}
console.log(a);
console.log(test);
test();