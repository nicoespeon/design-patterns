// Application
class Application {
  makeCars() {
    // What these values refer to?
    const car = new Car(2, null, new SportEngine(), true);
    const manual = new Manual(2, null, new SportEngine(), true);
  }
}


// Domain classes
class Car {
  // Telescopic constructor so everything can be configurable.
  constructor(seats, gps, engine, hasTripComputer) {
    this.seats = seats;
    this.direction.mode = gps;
    this.characteristics.engine = engine;
    this.hasTripComputer = hasTripComputer;

    if (gps.type === "TomTom") {
      this.setEuropeanCountry();
    }
  }
}

class Manual {
  constructor(seats, gps, engine, hasTripComputer) {
    this.seatsCount = seats;
    this.gps = gps;
    this.engine = engine;
    this.hasTripComputer = hasTripComputer;
  }
}

class SportEngine {}

class SUVEngine {}
