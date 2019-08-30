class Application {
  main() {
    const activeEditor = new Editor();

    const copy = () => this.executeCommand(new CopyCommand(this, activeEditor));
    // Once the command is defined, it's easy to assign it to any handler (GUI, shortcut, etc.).
    this.copyButton.setCommand(copy);
    this.shortcuts.onKeyPress("Ctrl+C", copy);

    const paste = () => this.executeCommand(new PasteCommand(this, activeEditor));
    this.pasteButton.setCommand(paste);
    this.shortcuts.onKeyPress("Ctrl+V", paste);
  }

  executeCommand(command) {
    if (command.execute()) {
      this.history.push(command);
    }
  }

  // Take the most recent command and ask it to undo.
  // It can be any command since they all fulfill the same interface.
  undo() {
    const command = this.history.pop();
    if (command) {
      command.undo();
    }
  }
}

// The Editor is the Receiver. It knows how to execute the work.
// Commands delegate the execution to the Editor in the end.
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

// Commands.
class Command {
  constructor(app, editor) {
    this.app = app;
    this.editor = editor;
  }

  saveBackup() {
    this.backup = this.editor.text
  }

  undo() {
    this.editor.text = this.backup;
  }

  // We decide to make this method abstract. Subclasses should implement this.
  // The (implicit) interface here says the method should return `true` if the command changes editor's state.
  execute() {
    throw new Error("Must be implemented in subclass");
  }
}

class CopyCommand extends Command {
  execute() {
    this.app.clipboard = this.editor.getSelection();

    // The Copy command doesn't change editor's state.
    return false;
  }
}

class PasteCommand extends Command {
  execute() {
    this.saveBackup();
    this.editor.replaceSelection(this.app.clipboard);

    // The Paste command changes editor's state.
    // Returning `true` so it gets save to the history in the Application `executeCommand()`
    return true;
  }
}
