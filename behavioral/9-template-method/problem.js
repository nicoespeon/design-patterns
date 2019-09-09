// These 2 classes implement the same `GameAI` interface, exposing a `turn()` method that will be called each turn of the game.
class OrcsAI {
  turn() {
    this.collectResources();
    this.buildStructures();
    this.buildUnits();
    this.attack();
  }

  collectResources() {
    this.builtStructures.forEach(structure => structure.collect());
  }

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

  attack() {
    const enemy = this.closestEnemy();
    if (!enemy) {
      this.sendScouts(this.map.center);
    } else {
      this.sendWarriors(enemy.position);
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

class MonstersAI {
  // It's almost the same logic, but not exactly. There are subtle differences.
  turn() {
    log(`${this.name} will attack`);
    this.attack();
    log(`${this.name} has attacked`);
  }

  // Now, the following code is duplicated.
  // We know that the `attack()` algorithm will always be the same.
  // How can we solve that?
  attack() {
    const enemy = this.closestEnemy();
    if (!enemy) {
      this.sendScouts(this.map.center);
    } else {
      this.sendWarriors(enemy.position);
    }
  }

  sendScouts(position) {
    // Move scouts group to position.
  }

  sendWarriors(position) {
    // Move warriors group to position.
  }
}
