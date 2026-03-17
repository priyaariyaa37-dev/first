/*Create a vehicle base class with subclasses Car and Bike, and 
implement polymorp.*/
// Base class
class Vehicle {
    void start() {
        System.out.println("Vehicle is starting");
    }
}

// Car subclass
class Car extends Vehicle {
    @Override
    void start() {
        System.out.println("Car starts with a key");
    }
}

// Bike subclass
class Bike extends Vehicle {
    @Override
    void start() {
        System.out.println("Bike starts with a self-start button");
    }
}

// Main class
public class Main {
    public static void main(String[] args) {

        Vehicle v;

        v = new Car();   // polymorphism
        v.start();

        v = new Bike();  // polymorphism
        v.start();
    }
}