class Application {
  load() {
    this.compound = new CompoundGraphic([new Circle(10, 3, 5)]);
    compound.add(new Dot(1, 2));
  }

  groupSelected(components) {
    const group = new CompoundGraphic(components);
    this.compound.add(group);

    // Draw everything on screen.
    this.compound.draw();
  }
}

// All of these classes implement the same "Graphic" interface.
// Whether they are "Composites" or "Leaves".
// So we can have "Composites" of "Composites" of "Leaves"…

// These are "Composites". They consolidate children work.
class CompoundGraphic {
  // Typically, children will be a list of other "Graphic" elements.
  // We can have variants of this, but the idea is to compose elements.
  constructor(children) {
    this.children = children;
  }

  get isSmall() {
    // Consolidate the information from children, recursively.
    return this.children.every(child => child.isSmall);
  }

  move(x, y) {
    this.children.forEach(child => child.move(x, y));
  }

  draw() {
    this.children.forEach(child => child.draw);
    // Then, we can draw a rectangle around children to mark the boundary.
  }

  // We can also define extra methods to manage children (optional).
  add(child) {
    this.children.push(child);
  }
}

// These are "Leaves". They actually do the work.
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
