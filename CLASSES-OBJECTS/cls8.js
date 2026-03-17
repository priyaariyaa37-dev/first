//multilevel inheritance
// Parent Class
class PersonA 
{
  greet() 
  {
    console.log("Hello, my name is Riya");
  }}

// Child Class (inherits from PersonA)
class PersonB extends PersonA 
{
  study() 
  {
    console.log( "Riya is studying.");
  }}

  // Sub-Child Class (inherits from PersonB)
class PersonC extends PersonB
{
  course() 
  {
    console.log( "Riya is good girl.");
  }}
// Creating object
const s1 = new PersonB();
const s2 = new PersonC();
s1.greet();   // Inherited method
s1.study();   // Child method
s2.course();  //sub-child 