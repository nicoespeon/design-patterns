// If colors & textures are BIG, we might not be able to create too much Trees…
class Forest {
  trees = [];

  plantTree(x, y, name, color, texture) {
    const tree = new Tree(name, color, texture, x, y, type);
    this.trees.add(tree);
  }

  draw(canvas) {
    this.trees.forEach(tree => tree.draw(canvas));
  }
}

class Tree {
  constructor(name, color, texture, x, y, type) {
    this.name = name;
    this.color = color;
    this.texture = texture;
    this.x = x;
    this.y = y;
    this.type = type;
  }

  draw(canvas) {
    // Create a bitmap of the given color & texture
    // Draw the bitmap on the canvas at (this.x, this.y)
  }
}
