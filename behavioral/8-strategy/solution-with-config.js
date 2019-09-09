class Application {
  main() {
    const [action, a, b] = this.getUserInputs();

    this.calculator = this.getCalculator(action);
    const result = this.calculator.calculate(a, b);
  }

  getCalculator(action) {
    // The switch statement can be replaced with a config map.
    // This could be defined somewhere else.
    const CALCULATOR_BY_ACTION = {
      "addition": Add,
      "substraction": Substract,
      "multiplication": Multiply
    };

    return new CALCULATOR_BY_ACTION[action]();
  }
}

// Each Strategy implements the same interface.
// We can decouple the logic of every use-case in different classes.
class Add {
  calculate(a, b) {
    return a + b;
  }
}

class Substract {
  calculate(a, b) {
    return a - b;
  }
}

class Multiply {
  calculate(a, b) {
    return a * b;
  }
}
