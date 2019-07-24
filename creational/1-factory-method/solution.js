class Application {
  constructor() {
    const config = readApplicationConfigFile();

    // We pushed the decision to the parent.
    // It's better because it has more context & reduces duplication of the decision.
    if (config.OS === "MacOS") {
      this.dialog = new MacOSDialog();
    } else {
      this.dialog = new WebDialog();
    }
  }

  run() {
    this.dialog.render();
  }
}


// Dialog

class Dialog {
  render() {
    const okButton = this.createButton();
    okButton.onClick(() => this.submit());
    okButton.render();

    const cancelButton = this.createButton();
    cancelButton.onClick(() => this.submit());
    cancelButton.render();
  }

  // 👇 This is the factory method!
  createButton() {
    throw new Exception("This should be implemented");
  }
}

class MacOSDialog extends Dialog {
  createButton() {
    return new MacOSButton();
  }
}

class WebDialog extends Dialog {
  createButton() {
    return new WebButton();
  }
}

// 👍 Creating a new behaviour = create a new Class

// Buttons

class MacOSButton {
  render() {}
  onClick() {}
}

class WebButton {
  render() {}
  onClick() {}
}
