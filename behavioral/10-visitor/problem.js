class Application {
  main() {
    this.allShapes.forEach(shape => shape.exportXML());
  }
}

// These `exportXML()` methods can feel a bit off. We could see them as a different responsibility.
// What if we need other kind of exports? Or to perform other kind of operations over all shapes?
class Dot {
  draw() {}

  exportXML() {
    // Export dot's ID and center coordinates.
  }
}

class Circle {
  draw() {}

  exportXML() {
    // Export circle's ID, center coordinates and radius.
  }
}

class Rectangle {
  draw() {}

  exportXML() {
    // Export rectangle's ID, left-top coordinates, width and height.
  }
}

class CompoundShape {
  draw() {}

  exportXML() {
    // Export the shape's ID and list of all children's IDs.
  }
}
