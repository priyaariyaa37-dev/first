// by deafault
// super keyword to call parent constructor
class A {
    constructor(name) {
        this.name=name;
    }
    show() {
        console.log("My Name is "+this.name);
    }
}
class B extends A {
    constructor(name) {
        super(name);   // call parent constructor
        console.log("Hello");
    }
}
let s2 = new B("Ravneet");
console.log(s2.name);
s2.show();