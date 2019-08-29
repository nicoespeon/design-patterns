class Application {
  main() {
    this.createUI();
  }

  createUI() {
    const dialog = new Dialog("Budget Reports");
    dialog.wikiPageURL = "https://…";

    const panel = new Panel(0, 0, 400, 800);
    panel.modalHelpText = "This panel does…";

    const ok = new Button(250, 760, 50, 20, "OK");
    ok.tooltipText = "This is an OK button that…";

    const cancel = new Button(320, 760, 50, 20, "Cancel");
  }

  onF1KeyPress() {
    const component = this.getComponentAtMouseCoords();
    // How do we know if the component can handle `showHelp()`?
    // If it doesn't handle it, how do we know which component to ask next?
  }
}

// Individual elements. They all implement the same "Component" interface.
class Component {
  showHelp() {
    if (!this.tooltipText) {
      return;
    }

    // Show tooltip.
  }
}

class Button extends Component {}

class Dialog extends Component {
  showHelp() {
    if (!this.wikiPageURL) {
      return;
    }

    // Open the wiki page.
  }
}

class Panel extends Component {
  showHelp() {
    if (!this.modalHelpText) {
      return;
    }

    // Show a modal with the help text
  }
}
