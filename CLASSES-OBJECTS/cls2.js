//default constructor
class Student 
{
    constructor() 
    {
        this.name = "Riya";
        this.age = 24;
    }
    display() 
    {
        console.log(this.name + " " + this.age);
    }
}
let s1 = new Student();
s1.display();