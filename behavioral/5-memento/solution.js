// Here, the Command will consume the Memento pattern.
// We call this the "caretaker".
class Command {
  makeBackup() {
    this.backup = this.editor.createSnapshot();
  }

  undo() {
    if (this.backup) {
      this.backup.restore();
    }
  }
}

// The "originator" which is the class that holds the data we want to restore.
// It defines methods so we can reset the state.
class Editor {
  setText(text) {
    this.text = text;
  }

  setCursor(x, y) {
    this.cursorX = x;
    this.cursorY = y;
  }

  setSelectionWidth(width) {
    this.selectionWidth = width;
  }

  // Saves the current state in a Memento.
  createSnapshot() {
    return new Snapshot(this, this.text, this.cursorX, this.cursorY, this.selectionWidth);
  }
}

// The Memento.
// It's an immutable object. It takes a current state and define a `restore()` method.
class Snapshot {
  constructor(editor, text, cursorX, cursorY, selectionWidth) {
    this.editor = editor;
    this.text = text;
    this.cursorX = cursorX;
    this.cursorY = cursorY;
    this.selectionWidth = selectionWidth;
  }

  restore() {
    this.editor.setText(this.text);
    this.editor.setCursor(this.cursorX, this.cursorY);
    this.editor.setSelectionWidth(this.selectionWidth);
  }
}
