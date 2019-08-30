class Application {
  main() {
    const activeEditor = new Editor();

    const doCopy = () => copy(this, activeEditor);
    // In JavaScript, we can pass functions as parameters.
    this.copyButton.setCommand(doCopy);
    this.shortcuts.onKeyPress("Ctrl+C", doCopy);

    const doPaste = () => paste(this, activeEditor);
    this.pasteButton.setCommand(doPaste);
    this.shortcuts.onKeyPress("Ctrl+V", doPaste);

    // However, how would we keep track of the changes history so we could undo them?
    // Introducing a global state could become messy…
  }
}

// The Editor will execute the work.
class Editor {
  getSelection() {
    // Return selected text
  }

  deleteSelection() {
    // Delete selected text
  }

  replaceSelection(text) {
    // Insert text at current position
  }
}

// Functions encapsulate the coordination logic, so we give semantic names & we don't duplicate this code.
function copy(app, editor) {
  app.clipboard = editor.getSelection();
}

function paste(app, editor) {
  editor.replaceSelection(app.clipboard);
}
