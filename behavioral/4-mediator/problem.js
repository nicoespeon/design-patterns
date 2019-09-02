class AuthenticationDialog {
  // The dialog is the "container" of all components here. It usually knows about all of them.
}

// Components are linked between each other.
// It makes it complicated to re-use in different context.
// It's also hard to get an overview of what happens in this dialog.
class Button {
  constructor(loginOrRegisterCheckbox, dialog, errorMessage) {
    this.loginOrRegisterCheckbox = loginOrRegisterCheckbox;
    this.dialog = dialog;
    this.errorMessage = errorMessage;
  }

  click() {
    if (this.loginOrRegisterCheckbox.checked) {
      const user = this.dialog.findLoggedInUser();
      if (!user) {
        this.errorMessage.show();
      }
    } else {
      this.dialog.createUserAccount();
      this.dialog.logUserIn();
    }
  }
}

class Checkbox {
  constructor(loginForm, registrationForm) {
    this.loginForm = loginForm;
    this.registrationForm = registrationForm;
  }

  check() {
    if (this.isChecked) {
      this.loginForm.show();
      this.registrationForm.hide();
    } else {
      this.loginForm.hide();
      this.registrationForm.show();
    }
  }
}
