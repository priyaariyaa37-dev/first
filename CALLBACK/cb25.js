/*Create a shape base class and subclasses Circle, Rectangle, and Triangle, 
overriding calculateArea() in each subclass. */
// Base class
class Shape {
    public double calculateArea() {
        return 0;
    }
}
// Circle subclass
class Circle extends Shape {
    double radius;
    Circle(double radius) {
        this.radius = radius;
    }
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}
// Rectangle subclass
class Rectangle extends Shape {
    double length, width;
    Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }
    @Override
    public double calculateArea() {
        return length * width;
    }
}
// Triangle subclass
class Triangle extends Shape {
    double base, height;
    Triangle(double base, double height) {
        this.base = base;
        this.height = height;
    }
    @Override
    public double calculateArea() {
        return 0.5 * base * height;
    }
}
// Main class
public class ShapeTest {
    public static void main(String[] args) {

        Circle c = new Circle(5);
        Rectangle r = new Rectangle(4, 6);
        Triangle t = new Triangle(3, 8);

        System.out.println("Circle Area: " + c.calculateArea());
        System.out.println("Rectangle Area: " + r.calculateArea());
        System.out.println("Triangle Area: " + t.calculateArea());
    }
}