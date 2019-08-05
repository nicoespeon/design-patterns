class Application {
  constructor() {
    this.shapes = new Shapes();

    const circle = new Circle();
    circle.setPositionTo(new Position(10, 10));
    circle.seRadiusTo(20);
    this.shapes.add(circle);

    // Create a new circle, similar to the previous one.
    const anotherCircle = new Circle();
    anotherCircle.setPositionTo(new Position(10, 10));
    anotherCircle.seRadiusTo(20);
    this.shapes.add(anotherCircle);

    const rectangle = new Rectangle();
    rectangle.setWidth(10);
    rectangle.setHeight(20);
    this.shapes.add(rectangle);
  }

  doSomething() {
    // How could we use the shapes without changing the original references? Risky.
    this.shapes.forEach(shape => { /** ?? */ });
  }
}

class Circle extends Shape {
  setRadiusTo(radius) {
    this.radius = radius;
  }
}

class Rectangle extends Shape {
  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }
}

class Shape {
  setPositionTo(position) {
    this.x = position.x;
    this.y = position.y;
  }
}
