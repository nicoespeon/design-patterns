class Application {
  makeCars() {
    // In JS, we could use an option object to solve the readability problem.
    const car = new Car({
      seats: 2,
      engine: new SportEngine(),
      hasTripComputer: true
    });
  }
}

class Car {
  constructor({ seats, gps, engine, hasTripComputer }) {
    this.seats = seats;
    this.direction.mode = gps;
    this.characteristics.engine = engine;
    this.hasTripComputer = hasTripComputer;

    if (gps.type === "TomTom") {
      this.setEuropeanCountry();
    }
  }
}

// But if we want to build the Car incrementally, a Builder can be handy.
// A Builder also separate the responsibility of creating the object from its behaviour.

// Finally, we could apply this to regular functions returning objects (more FP friendly)
// People call these functions "Factories", but it's different from the "Factory Method" pattern.
function createCar() {
  const car = {
    seats: 0,
    hasTripComputer: false,
    characteristics: {},
    direction: {
      mode: null
    }
  };

  return {
    getProduct() {
      return car;
    },

    setSeats(seats) {
      car.seats = seats;
      return this;
    },

    withTripComputer() {
      car.hasTripComputer = true;
      return this;
    },

    setEngine(engine) {
      car.characteristics.engine = engine;
      return this;
    },

    setGPS(gps) {
      car.direction.mode = gps;

      if (gps.type === "TomTom") {
        setEuropeanCountry(car); // That would be more FP-style.
      }
      return this;
    }
  }
}
