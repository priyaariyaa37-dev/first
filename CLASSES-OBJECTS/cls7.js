//Single inheritance
// Parent Class
class PersonA 
{
  greet() 
  {
    console.log("Hello, my name is Riya");
  }}
// Child Class (inherits from Person)
class PersonB extends PersonA 
{
  study() 
  {
    console.log( "Riya is studying.");
  }}
// Creating object
const s1 = new PersonB();
s1.greet();   // Inherited method
s1.study();   // Child method
