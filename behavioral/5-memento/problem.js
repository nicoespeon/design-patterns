// To implement the `undo` feature, the Command needs to access Editor internal state.
// This creates coupling.
class Command {
  makeBackup() {
    this.backup = {
      text: this.editor.text,
      cursorX: this.editor.cursorX,
      cursorY: this.editor.cursorY,
      selectionWidth: this.editor.selectionWidth
    };
  }

  undo() {
    if (this.backup) {
      this.editor.setText(this.backup.text);
      this.editor.setCursor(this.backup.cursorX, this.backup.cursorY);
      this.editor.setSelectionWidth(this.backup.selectionWidth);
    }
  }
}

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

  // An alternative would have been to store the backup in the Editor directly.
  // But it would clutter the Editor code. What if we need to keep the whole history of backups?
}
