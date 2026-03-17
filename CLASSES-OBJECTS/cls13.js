//runtime polymorphism(overidding)
// Parent class
class Animal {
  sound() {
    console.log("Animal makes a sound");
  }
}

// Child class
class Dog extends Animal {
  sound() {   // Overriding parent method
    console.log("Dog barks");
  }
}

// Another Child class
class Cat extends Animal {
  sound() {   // Overriding parent method
    console.log("cat; meows");
  }
}

// Runtime decision
const a1 = new Dog();
const a2 = new Cat();

a1.sound();  // Dog barks
a2.sound();  // Cat meows