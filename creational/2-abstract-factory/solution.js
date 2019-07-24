class Application {
  constructor() {
    const config = readApplicationConfigFile();

    // We pushed the decision to the top-most parent (usually, `main`).
    if (config.OS === "MacOS") {
      this.UIFactory = new MacOSUIFactory();
    } else {
      this.UIFactory = new WebUIFactory();
    }
  }

  run() {
    new ResultsPage(this.UIFactory);
  }
}

class ResultsPage {
  constructor(UIFactory) {
    this.UIFactory = UIFactory;
  }

  render() {
    this.window = factory.createWindow();
    this.window.fullscreen();

    this.button = factory.createButton();
    this.button.fullscreen();
  }
}

// 👇 Abstract Factory

class UIFactory {
  createButton() {
    throw new Exception("This should be implemented");
  }

  createWindow() {
    // We could imagine this is the default behaviour.
    return new WebWindow();
  }
}

class MacOSUIFactory extends UIFactory {
  createButton() {
    return new MacOSButton();
  }

  createWindow() {
    return new MacOSWindow();
  }
}

class WebUIFactory extends UIFactory {
  createButton() {
    return new WebButton();
  }
}

// 👍 It's easier to ensure we use the correct elements together.
// 👍 Creating a new behaviour = create a new Class

// UI Elements

class MacOSButton {
  render() {}
  onClick() {}
}

class MacOSWindow {
  fullscreen() {}
}

class WebButton {
  render() {}
  onClick() {}
}

class WebWindow {
  fullscreen() {}
}
