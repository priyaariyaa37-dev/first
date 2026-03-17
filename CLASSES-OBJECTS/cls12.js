//super used in the object literals  setprototypeof()
let parent = {
    greet() {
        console.log("Hello from parent");
    }
};
let child = {
    greet() {
        super.greet(); 
        console.log("Hello from child");
    }
};
Object.setPrototypeOf(child, parent);
child.greet();