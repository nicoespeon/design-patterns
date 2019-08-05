class Application {
  main() {
    const hole = new RoundHole(5);
    const roundPeg = new RoundPeg(5);
    hole.fits(roundPeg); // true


    const smallSquarePeg = new SquarePeg(5);
    const largeSquarePeg = new SquarePeg(10);

    // These would fail (or crash) because interfaces aren't compatible!
    // `hole.fits()` will try to access square pegs radius, but they don't have a radius!
    hole.fits(smallSquarePeg); 
    hole.fits(largeSquarePeg); 
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
