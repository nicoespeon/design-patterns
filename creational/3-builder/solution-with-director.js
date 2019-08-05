/**
 * Using a Director is optional. But if we want to abstract a building sequence, it's handy.
 */

// Application
class Application {
  makeCars() {
    const director = new Director();

    const carBuilder = new CarBuilder();
    director.setBuilder(carBuilder);
    director.constructSportsCar();
    const car = carBuilder.getProduct();

    const carManualBuilder = new CarManualBuilder();
    director.setBuilder(carManualBuilder);
    director.constructSportsCar();
    const manual = carManualBuilder.getProduct();
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
    return this;
  }

  getProduct() {
    const product = this.car;
    this.reset();
    return product;
  }

  setSeats(seats) {
    this.car.seats = seats;
    return this;
  }

  withTripComputer() {
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

// Optional: a Director to abstract building sequences and add semantics
class Director {
  setBuilder(builder) {
    this.builder = builder;
  }

  constructSportsCar() {
    this.builder.reset()
      .setSeats(2)
      .withTripComputer()
      .setEngine(new SportEngine())
      .setGPS(new TomTomGPS());
  }

  constructSUV() {
    this.builder.reset()
      .setSeats(4)
      .withTripComputer()
      .setEngine(new SUVEngine());
  }
}

// We could also pass `builder` as a parameter and make these pure functions instead of class methods.
function constructSportsCar(builder) {
  builder.reset()
    .setSeats(2)
    .withTripComputer()
    .setEngine(new SportEngine())
    .setGPS(new TomTomGPS());
}
