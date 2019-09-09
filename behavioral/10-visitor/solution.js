// The client code can run any kind of visitor over the list of shapes.
class Application {
  main() {
    const exportVisitor = new XMLExportVisitor();

    this.allShapes.forEach(shape => shape.accept(exportVisitor));
  }
}

// Concrete Visitor. It will traverse the tree, executing relevant logic depending on the node type.
// We could implement other visitors to do other kind of actions, still following the same `Visitor` interface.
class XMLExportVisitor {
  visitDot(dot) {
    // Export dot's ID and center coordinates.
  }

  visitCircle(circle) {
    // Export circle's ID, center coordinates and radius.
  }

  visitRectangle(rectangle) {
    // Export rectangle's ID, left-top coordinates, width and height.
  }

  visitCompoundShape(shape) {
    // Export the shape's ID and list of all children's IDs.
  }
}

// All shapes implement the same `Shape` interface.
// They have an `accept()` method that will call the correct visitor's method at runtime.
// This technique is called [Double Dispatch](https://refactoring.guru/design-patterns/visitor-double-dispatch).
class Dot {
  draw() {}

  accept(visitor) {
    visitor.visitDot(this);
  }
}

class Circle {
  draw() {}

  accept(visitor) {
    visitor.visitCircle(this);
  }
}

class Rectangle {
  draw() {}

  accept(visitor) {
    visitor.visitRectangle(this);
  }
}

class CompoundShape {
  draw() {}

  accept(visitor) {
    visitor.visitCompoundShape(this);
  }
}
