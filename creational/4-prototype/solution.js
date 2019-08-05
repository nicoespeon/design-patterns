class Application {
  constructor() {
    this.shapes = new Shapes();

    const circle = new Circle();
    circle.setPositionTo(new Position(10, 10));
    circle.seRadiusTo(20);
    this.shapes.add(circle);

    // Create a new, independent copy of the first circle.
    const anotherCircle = circle.clone();
    this.shapes.add(anotherCircle);

    // Rectangle implicitly follows the same `Shape` interface.
    const rectangle = new Rectangle();
    rectangle.setWidth(10);
    rectangle.setHeight(20);
    this.shapes.add(rectangle);
  }

  doSomething() {
    const shapesCopy = this.shapes.forEach(shape => shape.clone());
    // Now we can work with an exact copy of the shapes, without changing the original references.
  }
}

class Circle extends Shape {
  constructor(source) {
    // Initialize a fresh instance with value of a previous one.
    // Call base class constructor to clone its properties too.
    // Actually, you should always call `super()` in a subclass constructor.
    super(source);
    this.radius = source.radius;
  }

  setRadiusTo(radius) {
    this.radius = radius;
  }

  clone() {
    // Returning a new instance.
    // We apply the same technique to create "Value Objects" (see DDD).
    // It brings "Immutability" to OOP. It simplifies maintainance.
    return new Circle(this);
  }
}

class Rectangle extends Shape {
  constructor(source) {
    super(source);
    this.width = source.width;
    this.height = source.height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  clone() {
    return new Rectangle(this);
  }
}

class Shape {
  constructor(source) {
    this.x = source.x;
    this.y = source.y;
  }

  setPositionTo(position) {
    this.x = position.x;
    this.y = position.y;
  }

  // We consider Shape an "abstract class".
  // It should be subclassed to implement some methods.
  clone() {
    throw new Error("Should be implemented in subclasses");
  }
}
