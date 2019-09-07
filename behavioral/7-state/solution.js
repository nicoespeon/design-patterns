// There is a main "Context" object that keeps track of the different States it can be in.
class AudioPlayer {
  constructor() {
    this.state = new ReadyState(this);

    const UI = new UserInterface();
    UI.playButton.onClick(this.clickPlay.bind(this));
    UI.prevButton.onClick(this.clickPrev.bind(this));
    UI.nextButton.onClick(this.clickNext.bind(this));
    UI.lockButton.onClick(this.clickLock.bind(this));
  }

  // Other objects can change AudioPlayer's state.
  changeState(state) {
    this.state = state;
  }

  // The AudioPlayer delegates most of the work to the State objects.
  clickPlay() {
    this.state.clickPlay();
  }

  clickPrev(event) {
    this.state.clickPrev(event);
  }

  clickNext(event) {
    this.state.clickNext(event);
  }

  clickLock() {
    this.state.clickLock();
  }

  // It can also define some methods itself.
  startPlayback() {}
  stopPlayback() {}
  nextSong() {}
  previousSong() {}
  fastForward(time) {}
}

// We can define a base, abstract "State" class.
// All State objects implicitly have the same interface.
class State {
  constructor(player) {
    this.player = player;
  }
  clickPlay() {
    throw new Error("Should be implemented in subclass");
  }

  clickPrev() {
    throw new Error("Should be implemented in subclass");
  }

  clickNext() {
    throw new Error("Should be implemented in subclass");
  }

  clickLock() {
    throw new Error("Should be implemented in subclass");
  }
}

// States can trigger transitions to other states.
class ReadyState extends State {
  clickPlay() {
    this.player.startPlayback();
    this.player.changeState(new PlayingState(this.player));
  }

  clickPrev() {
    this.player.previousSong();
  }

  clickNext() {
    this.player.nextSong();
  }

  clickLock() {
    this.player.changeState(new LockedState(this.player));
  }
}

class PlayingState extends State {
  clickPlay() {
    this.player.stopPlayback();
    this.player.changeState(new ReadyState(this.player));
  }

  clickPrev(event) {
    if (event.doubleClick) {
      this.player.previousSong()
    } else {
      this.player.rewind(5);
    }
  }

  clickNext(event) {
    if (event.doubleClick) {
      this.player.nextSong();
    } else {
      this.player.fastForward(5);
    }
  }

  clickLock() {
    this.player.changeState(new LockedState(this.player));
  }
}

class LockedState extends State {
  clickPlay() {
    // Locked, do nothing.
  }

  clickPrev(event) {
    // Locked, do nothing.
  }

  clickNext() {
    // Locked, do nothing.
  }

  clickLock() {
    if (this.player.isPlaying) {
      this.player.changeState(new PlayingState(this.player));
    } else {
      this.player.changeState(new ReadyState(this.player));
    }
  }
}
