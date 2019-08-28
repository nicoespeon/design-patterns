class App {
  main() {
    const tv = new Tv();
    tv.togglePower();

    const radio = new Radio();
    radio.togglePower();
    radio.mute();

    // What if we need a Radio without "mute"?
    // What if we need a Tv with "mute"?
  }
}

// Both classes implement the implicit "Device" interface
class Tv {
  get isEnabled() {}

  togglePower() {
    if (this.isEnabled) {
      this.enable();
    } else {
      this.disable();
    }
  }

  enable() {}
  disable() {}
  getVolume() {}
  setVolume(percent) {}
}

class Radio {
  get isEnabled() {}

  // This logic is kinda duplicated…
  // We could introduce a base class and have Tv and Radio extend it?
  togglePower() {
    if (this.isEnabled) {
      this.enable();
    } else {
      this.disable();
    }
  }

  // What if we need a Radio without "mute"?
  // What if we need a Tv with "mute"?
  // Extending a base class will make that hard. We need composition!
  mute() {
    this.device.setVolume(0);
  }

  enable() {}
  disable() {}
  getVolume() {}
  setVolume(percent) {}
}
