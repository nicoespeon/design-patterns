// Usually, the top-level application will connect things together.
// Individual elements are decoupled. They can be configured as needed.
class Application {
  main() {
    this.editor = new TextEditor();

    this.logger = new LoggingListener(
      "/path/to/logs.txt",
      fileName => `Someone has opened the file: ${fileName}`
    );
    this.editor.events.subscribe("open", this.logger);

    this.emailAlerts = new EmailAlertsListener(
      "admin@example.com",
      fileName => `Someone has changed the file: ${fileName}`
    );
    this.editor.events.subscribe("save", this.emailAlerts);
  }
}

// The Editor will use the EventManager to trigger interesting events.
// It doesn't know, nor care about who's listening.
class TextEditor {
  constructor() {
    this.events = new EventManager();
  }

  openFile(path) {
    this.file = new File(path);
    this.events.notify("open", this.file.name);
  }

  saveFile() {
    this.file.write();
    this.events.notify("save", this.file.name);
  }
}

// The EventManager is the publisher. It deals with subscriptions.
// It keeps the collection of listeners up to date.
class EventManager {
  // Here, we can think `listeners` as a custom hash map of event types.

  subscribe(eventType, listener) {
    this.listeners.add(eventType, listener);
  }

  unsubscribe(eventType, listener) {
    this.listeners.delete(eventType, listener);
  }

  notify(eventType, data) {
    this.listeners.forEachOf(eventType, (listener) => listener.update(data));
  }
}

// Different kind of event listeners.
// They implicitly implement the same `EventListener` interface.
class LoggingListener {
  constructor(fileName, getMessage) {
    this.log = new File(fileName);
    this.getMessage = getMessage;
  }

  update(fileName) {
    this.log.write(getMessage(fileName));
  }
}

class EmailAlertsListener {
  constructor(email, getMessage) {
    this.email = email;
    this.getMessage = getMessage;
  }

  update(fileName) {
    Mailer.sendTo(this.email, getMessage(fileName));
  }
}
