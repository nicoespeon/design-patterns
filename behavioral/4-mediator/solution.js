// Here, the Dialog component plays the role of the mediator.
// It already knew all the components of the page.
// It implements the `Mediator` interface, so we could replace it with another implementation.
class AuthenticationDialog {
  // When something happens in a component, it notifies the mediator.
  // The mediator will then call the relevant components behaviors.
  notify(sender, event) {
    if (sender === this.loginOrRegisterCheckbox && event === "check") {
      if (this.loginOrRegisterCheckbox.checked) {
        this.showLoginForm();
        this.hideRegistrationForm();
      } else {
        this.hideLoginForm();
        this.showRegistrationForm();
      }
    }

    if (sender === this.okButton && event === "click") {
      if (this.loginOrRegisterCheckbox.checked) {
        const user = this.findLoggedInUser();
        if (!user) {
          this.showErrorMessage();
        }
      } else {
        this.createUserAccount();
        this.logUserIn();
      }
    }
  }
}

// All Components communicate with the mediator when interesting things happen.
// Components don't talk directly to each other. So we could re-use them easily.
class Component {
  // Here, `dialog` implements the `Mediator` interface.
  constructor(dialog) {
    this.dialog = dialog;
  }

  click() {
    this.dialog.notify(this, "click");
  }
}

class Button extends Component {}

class CheckBox extends Component {
  check() {
    this.dialog.notify(this, "check");
  }
}
