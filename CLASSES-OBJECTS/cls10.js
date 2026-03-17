//super
// super keyword to call parent constructor
class A{
    constructor(name){
        this.name=name;
    }
}
class B extends A{
    constructor(name,age){
        super(name)
        this.age=age;
    }
}
let s1=new B("Ravneet","23");
console.log(s1.name);
console.log(s1.age);


