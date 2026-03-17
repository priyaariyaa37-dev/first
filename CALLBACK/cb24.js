/* Create a car class with model and rentPerDay, and
 a Rental class to calculate total rent for a number of days*/
 // Car Class
class Car {
  constructor(model, rentPerDay) {
    this.model = model;
    this.rentPerDay = rentPerDay;
  }
}

// Rental Class
class Rental {
  constructor(car, days) {
    this.car = car;
    this.days = days;
  }

  calculateTotalRent() {
    return this.car.rentPerDay * this.days;
  }

  displayRent() {
    console.log("Car Model:", this.car.model);
    console.log("Rent Per Day:", this.car.rentPerDay);
    console.log("Days:", this.days);
    console.log("Total Rent:", this.calculateTotalRent());
  }
}

// Create object
let car1 = new Car("Honda City", 2000);
let rental1 = new Rental(car1, 5);

// Call method
rental1.displayRent();