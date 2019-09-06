class Application {
  main() {
    this.logger = new Logger(
      "/path/to/logs.txt",
      fileName => `Someone has opened the file: ${fileName}`
    );

    this.emailAlerts = new EmailAlerts(
      "admin@example.com",
      fileName => `Someone has changed the file: ${fileName}`
    );

    this.editor = new TextEditor(this.logger, this.emailAlerts);
  }
}

// Anytime we want to add another listener, we need to change the TextEditor.
class TextEditor {
  constructor(logger, emailAlerts) {
    this.logger = logger;
    this.emailAlerts = emailAlerts;
  }

  openFile(path) {
    this.file = new File(path);
    this.logger.update(this.file.name);
  }

  saveFile() {
    this.file.write();
    this.emailAlerts.update(this.file.name);
  }
}

// Note these components already implement the same interface of an `update()` method.
class Logging {
  constructor(fileName, getMessage) {
    this.log = new File(fileName);
    this.getMessage = getMessage;
  }

  update(fileName) {
    this.log.write(getMessage(fileName));
  }
}

class EmailAlerts {
  constructor(email, getMessage) {
    this.email = email;
    this.getMessage = getMessage;
  }

  update(fileName) {
    Mailer.sendTo(this.email, getMessage(fileName));
  }
}
