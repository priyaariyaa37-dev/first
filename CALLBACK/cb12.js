class Employee
{
constructor(eid,name)
{
    this.eid=eid;
    this.ename=name
}
}
Employee.prototype.dept=50000

emp1obj=new Employee(101, "David");
console.log(emp1obj.eid,emp1obj.ename,emp1obj.sa1)

emp2obj=new Employee(102,"John");