class Application {
  main() {
    const [action, a, b] = this.getUserInputs();

    this.calculator = this.getCalculator(action);
    const result = this.calculator.calculate(a, b);
  }

  getCalculator(action) {
    const calculator = new Calculator();

    switch(action) {
      case "addition":
        return calculator.setStrategy(new Add());

      case "substraction":
        return calculator.setStrategy(new Substract());

      case "multiplication":
        return calculator.setStrategy(new Multiply());
    }
  }
}

// Calculator is the "context". He doesn't do the actual work but delegate to the relevant Strategy.
// We might also get rid of the context if the client code wants to deal with the Strategy directly.
// Or we could move the strategy selection logic into the calculator.
class Calculator {
  setStrategy(strategy) {
    // It could take the strategy as a constructor param, or expose a setter.
    // It really depends on what you need to do.
    this.strategy = strategy;
  }

  // The API doesn't need to be the same than the strategy though.
  calculate(a, b) {
    return this.strategy.calculate(a, b);
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
