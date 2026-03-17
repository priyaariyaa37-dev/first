/*Create a student class with private marks and a public setter that validates marks are 0-100. */
class Student {
    private int marks;   // private variable

    // Setter method with validation
    public void setMarks(int marks) {
        if (marks >= 0 && marks <= 100) {
            this.marks = marks;
        } else {
            System.out.println("Invalid marks! Marks should be between 0 and 100.");
        }
    }

    // Getter method
    public int getMarks() {
        return marks;
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student();

        s.setMarks(85);   // valid
        System.out.println("Marks: " + s.getMarks());

        s.setMarks(120);  // invalid
    }
}