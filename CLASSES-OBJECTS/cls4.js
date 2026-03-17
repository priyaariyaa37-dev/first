//parameterized constructor
class Student 
{
    constructor(name, age) 
    {   
        this.name = name;
        this.age = age;
    }

    display() 
    {
        console.log(this.name + " " + this.age);
    }
}

let s1 = new Student("Riya", 21);
let s2 = new Student("Aman", 22);

s1.display();
s2.display();
