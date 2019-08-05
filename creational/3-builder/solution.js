// Application
class Application {
  makeCars() {
    const carBuilder = new CarBuilder();
    const car = carBuilder
      .setSeats(2)
      .withTripComputer()
      .setEngine(new SportEngine())
      .getProduct();

    const carManualBuilder = new CarManualBuilder();
    const manual = carManualBuilder
      .setSeats(2)
      .withTripComputer()
      .setEngine(new SportEngine())
      .getProduct();
  }
}

// Domain classes
class Car {
  constructor() {} // => No more telescopic constructor
}

class Manual {
  constructor() {}
}

class SportEngine {}

class SUVEngine {}

// Builders
class CarBuilder {
  constructor() {
    this.reset()
  }

  reset() {
    this.car = new Car();
    return this;             // => allows us to chain methods in JS
  }

  getProduct() {             // => also known as `build()`
    const product = this.car;
    this.reset();
    return product;
  }

  setSeats(seats) {
    this.car.seats = seats;
    return this;
  }

  withTripComputer() {       // => we can even add some semantics
    this.car.hasTripComputer = true;
    return this;
  }

  setEngine(engine) {
    this.car.characteristics.engine = engine;
    return this;
  }

  setGPS(gps) {
    this.car.direction.mode = gps;

    if (gps.type === "TomTom") {
      this.car.setEuropeanCountry();
    }
    return this;
  }
}

class CarManualBuilder {
  constructor() {
    this.reset()
  }

  reset() {
    this.manual = new Manual();
    return this;
  }

  getProduct() {
    const product = this.manual;
    this.reset();
    return product;
  }

  setSeats(seats) {
    this.manual.seatsCount = seats;
    return this;
  }

  withTripComputer() {
    this.manual.hasTripComputer = true;
    return this;
  }

  setEngine(engine) {
    this.manual.engine = engine;
    return this;
  }

  setGPS(gps) {
    this.manual.gps = gps;
    return this;
  }
}

