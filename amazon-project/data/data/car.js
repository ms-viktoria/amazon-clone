class Car {
  brand;
  model;

  constructor(carDetails) {
    this.brand = carDetails.brand;
    this.model = carDetails.model;

    speed = 0;
  }

  displayInfo() {
    console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/h`);
  }
  go() {
    this.speed += 5;
    if (this.speed >200) {
      this.speed = 200;
    }
  }

  brake() {
    this.speed -=5;
    if(this.speed < 0){
      this.speed = 0;
    }
  }
}

const car1 = new Car({
  brand: 'Toyota',
  model: 'Corolla'
});

const car2 = new Car({
  brand: 'Tesla',
  model: 'Model 3'
});

console.log(car1);
console.log(car2);



car1.displayInfo();
car2.displayInfo();