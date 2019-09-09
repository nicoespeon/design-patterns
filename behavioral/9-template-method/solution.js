// The abstract class defines Template Methods that contain the algorithm skeleton.
class GameAI {
  // This is the Template Method.
  // Everyone follows the same steps. Regardless the concrete implementation.
  turn() {
    this.collectResources();
    this.buildStructures();
    this.buildUnits();
    this.onBeforeAttack();
    this.attack();
    this.onAfterAttack();
  }

  // Some steps can have a default implementation.
  collectResources() {
    this.builtStructures.forEach(structure => structure.collect());
  }

  // Some steps would be "abstract". They must be implemented.
  buildStructures() {
    throw new Error("Should be implemented in subclass");
  }

  buildUnits() {
    throw new Error("Should be implemented in subclass");
  }

  // Hooks are optional steps that could be implemented by subclasses.
  onBeforeAttack() {
    // By default, do nothing.
  }

  onAfterAttack() {
    // By default, do nothing.
  }

  // Another Template Method.
  // A class can have many Template Methods, if necessary.
  attack() {
    const enemy = this.closestEnemy();
    if (!enemy) {
      this.sendScouts(this.map.center);
    } else {
      this.sendWarriors(enemy.position);
    }
  }

  sendScouts(position) {
    throw new Error("Should be implemented in subclass");
  }

  sendWarriors(position) {
    throw new Error("Should be implemented in subclass");
  }
}

// Concrete classes will implement the astract operations of the base class.
// They will keep the Template Method untouched.
class OrcsAI extends GameAI {
  buildStructures() {
    if (this.hasResources()) {
      // Build farms, barracks, stronghold…
    }
  }

  buildUnits() {
    if (this.hasPlentyResources()) {
      if (this.hasScouts()) {
        // Build grunt, add it to warrior group.
      } else {
        // Build peon, add it to scouts group.
      }
    }
  }

  sendScouts(position) {
    if (this.hasScouts()) {
      // Move scouts group to position.
    }
  }

  sendWarriors(position) {
    if (this.warriors.length > 5) {
      // Move warriors group to position.
    }
  }
}

// Subclasses can also override some operations to provide a custom one. "Do nothing" is a valid implementation.
class MonstersAI extends GameAI {
  collectResources() {
    // Monsters don't collect resources. Do nothing.
  }

  buildStructures() {
    // Monsters don't build structures. Do nothing.
  }

  buildUnits() {
    // Monsters don't build units. Do nothing.
  }

  onBeforeAttack() {
    log(`${this.name} will attack`);
  }

  onAfterAttack() {
    log(`${this.name} has attacked`);
  }

  sendScouts(position) {
    // Move scouts group to position.
  }

  sendWarriors(position) {
    // Move warriors group to position.
  }
}
