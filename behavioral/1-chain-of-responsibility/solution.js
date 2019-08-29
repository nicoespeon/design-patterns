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
    // …

    // Create the DOM chain.
    panel.add(ok)
    panel.add(cancel)
    dialog.add(panel)
  }

  onF1KeyPress() {
    const component = this.getComponentAtMouseCoords();
    component.showHelp();
  }
}

// Individual Handlers of the chain. They all implement the same "Component" interface.
// We can create a base class to encapsulate common behaviour.
class Component {
  showHelp() {
    if (!this.tooltipText) {
      // Bubble the call up the chain.
      this.container.showHelp();
    }

    // Show tooltip.
  }
}

// The Container builds the chain. It defines which Handler is after the other.
// We can put simple Handlers or other Containers in the chain.
class Container extends Component {
  children = [];

  add(child) {
    this.children.push(child);
    child.container = this;
  }
}

// Simple Handlers can just extend the class.
class Button extends Container {}

// More complex Handlers will provide custom implementations.
// Each Handler can delegate the work to the base class to pass the responsibility along the chain.
class Dialog extends Container {
  showHelp() {
    if (!this.wikiPageURL) {
      // Bubble the call up.
      super.showHelp();
    }

    // Open the wiki page.
  }
}

class Panel extends Container {
  showHelp() {
    if (!this.modalHelpText) {
      // Bubble the call up.
      super.showHelp();
    }

    // Show a modal with the help text
  }
}

// This example shows how to use the pattern to bubble up an event through a chain.
// The first Handler that can deal with the event will stop propagation.
// Think about DOM events handlers.

// Another use-case would be a chain of validation/authorization/encryption/etc.
// Each Handler can operate on the data and pass the transformed data to the next Handler. If something is wrong, it stops the propagation.
// Think about server middlewares.
