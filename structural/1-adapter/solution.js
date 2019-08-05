class Application {
  main() {
    const hole = new RoundHole(5);
    const roundPeg = new RoundPeg(5);
    hole.fits(roundPeg); // true


    const smallSquarePeg = new SquarePeg(5);
    const largeSquarePeg = new SquarePeg(10);
    const smallSquarePegAdapter = new SquarePegAdapter(smallSquarePeg);
    const largeSquarePegAdapter = new SquarePegAdapter(largeSquarePeg);
    hole.fits(smallSquarePegAdapter); // true
    hole.fits(largeSquarePegAdapter); // false
  }
}

// Domain
class RoundHole {
  constructor(radius) {
    this.radius = radius;
  }

  fits(peg) {
    return this.radius >= peg.radius;
  }
}

class RoundPeg {
  constructor(radius) {
    this.radius = radius;
  }
}

class SquarePeg {
  constructor(width) {
    this.width = width;
  }
}

// Adapter
class SquarePegAdapter {
  // Implicitly, the Adapter implements the same interface as `RoundPeg`
  constructor(peg) {
    this.peg = peg;
  }

  // Here we decided to use a getter to fill the interface.
  // We could have defined `this.radius` in the constructor too.
  get radius() {
    return this.peg.width * Math.sqrt(2) / 2
  }
}
