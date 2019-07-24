class Application {
  constructor() {
    this.config = readApplicationConfigFile();
  }

  run() {
    new ResultsPage(this.config);
  }
}

class ResultsPage {
  render() {
    this.window = this.config.OS === "MacOS" ? new MacOSWindow() : new WebWindow();
    this.window.fullscreen();

    this.button = this.config.OS === "MacOS" ? new MacOSButton() : new WebButton();
    this.button.render();

    // Anytime we create a UI element, we have to duplicate the if/else logic.
    // We should pay attention to use the correct elements together, or it would be a bug!
    // It becomes worse, if we need to create another kind of button…
  }
}

// UI Elements - Note they already respect the same interface, speaking Domain language

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
