class Application {
  constructor() {
    const config = readApplicationConfigFile();
    this.dialog = new Dialog(config);
  }

  run() {
    this.dialog.render();
  }
}

// Dialog

class Dialog {
  render() {
    const okButton = this.config.OS === "MacOS" ? new MacOSButton() : new WebButton();
    okButton.onClick(() => this.submit());
    okButton.render();

    const cancelButton = this.config.OS === "MacOS" ? new MacOSButton() : new WebButton();
    cancelButton.onClick(() => this.closeDialog());
    cancelButton.render();

    // Anytime we create a button, we have to duplicate the if/else logic.
    // It becomes worse, if we need to create another kind of button…
  }
}

// Buttons - Note they already respect the same interface, speaking Domain language

class MacOSButton {
  render() {}
  onClick() {}
}

class WebButton {
  render() {}
  onClick() {}
}
