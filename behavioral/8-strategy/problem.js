class Application {
  main() {
    const [action, a, b] = this.getUserInputs();

    let result;
    switch(action) {
      case "addition":
        result = a + b;
        break;

      case "substraction":
        result = a - b;
        break;

      case "multiplication":
        result = a * b;
        break;
    }

    // This is fine so far. But it would be annoying to add more capabilities:
    // - every new method of Application will need to have a branched logic
    // - the different concepts are mixed, making it harder to reason about them independently
    // - adding new operations means modifying all methods having the branched logic.
  }
}
