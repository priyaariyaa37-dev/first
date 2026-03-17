//2 objects in a class
class student
{
    display()
    {
        console.log(this.id+" "+this.name)
    }
}
let obj = new student();
obj.id=101
obj.name="Riya"
obj.display()

let obj1 = new student();
obj1.id=102
obj1.name="Tanu"
obj1.display()
