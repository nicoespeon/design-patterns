// Flyweight's clients.
// We can create billions of Trees now since they only contain (x, y) and a reference field.
class Forest {
  trees = [];

  plantTree(x, y, name, color, texture) {
    const type = TreeFactory.getTreeType(name, color, texture);
    const tree = new Tree(x, y, type);
    this.trees.add(tree);
  }

  draw(canvas) {
    this.trees.forEach(tree => tree.draw(canvas));
  }
}

class Tree {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  draw(canvas) {
    this.type.draw(canvas, this.x, this.y);
  }
}

// Flyweight factory.
// It decides whether to re-use existing flyweight or to create new objects.
class TreeFactory {
  treeTypes = [];

  static getTreeType(name, color, texture) {
    let type = this.treeTypes.find((type) => type.name === name && type.color === color && type.texture === texture);

    if (!type) {
      type = new TreeType(name, color, texture);
      this.treeTypes.push(type);
    }

    return type;
  }
}

// Flyweight. It extracts heavy parts of the original object.
// Imagine color and texture to be BIG, being composed by a lot of data.
// Since they are shared between a lot of different trees, it's more RAM-efficient to have them here.
class TreeType {
  constructor(name, color, texture) {
    this.name = name;
    this.color = color;
    this.texture = texture;
  }

  draw(canvas, x, y) {
    // Create a bitmap of the given color & texture
    // Draw the bitmap on the canvas at (x, y)
  }
}
