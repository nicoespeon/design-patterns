class Application {
  load() {
    this.compound = [new Circle(10, 3, 5), new Dot(1, 2)];
  }

  groupSelected(components) {
    this.compound = [...this.compound, ...components];

    // Draw everything on screen.
    this.compound.forEach(child => child.draw());
    // Then we want/need to draw a box around the selected `components` only.

    // Worse case scenario: the interfaces of each child is different and we need
    // to discriminate them with "instanceof".
    // In that case, first step: make all of them follow the same interface.
  }
}

// Here we have all classes follow the same interface already.
class Dot {
  isSmall = true;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }

  draw() {
    // Draw a dot at (x, y)
  }
}

class Circle {
  isSmall = false;

  constructor(radius, x, y) {
    this.radius = radius;
    this.x = x;
    this.y = y;
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }

  draw() {
    // Draw a circle with radius R at (x, y)
  }
}
