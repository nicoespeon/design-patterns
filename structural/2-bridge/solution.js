class App {
  main() {
    const tv = new Tv();
    const tvRemote = new RemoteControl(tv);
    tvRemote.togglePower();

    const radio = new Radio();
    // We can choose to use another abstraction if we need to.
    const radioRemote = new AdvancedRemoteControl(radio);
    radioRemote.togglePower();
    radioRemote.mute();
  }
}

// These are concrete implementations.
// Both classes implement the implicit "Device" interface
class Tv {
  get isEnabled() {}
  enable() {}
  disable() {}
  getVolume() {}
  setVolume(percent) {}
}

class Radio {
  get isEnabled() {}
  enable() {}
  disable() {}
  getVolume() {}
  setVolume(percent) {}
}

// These are the abstractions that will use the implementations.
// They provide a convenient interface to use from the client.
class RemoteControl {
  constructor(device) {
    this.device = device;
  }

  togglePower() {
    if (this.device.isEnabled) {
      this.device.enable();
    } else {
      this.device.disable();
    }
  }
}

// We can create more powerful abstractions without changing original implementations.
class AdvancedRemoteControl extends RemoteControl {
  mute() {
    this.device.setVolume(0);
  }
}
