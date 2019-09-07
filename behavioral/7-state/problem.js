class AudioPlayer {
  constructor() {
    const UI = new UserInterface();
    UI.playButton.onClick(this.clickPlay.bind(this));
    UI.prevButton.onClick(this.clickPrev.bind(this));
    UI.nextButton.onClick(this.clickNext.bind(this));
    UI.lockButton.onClick(this.clickLock.bind(this));
  }

  // Every method is filled with conditionals.
  // It's hard to understand the behaviour of the player in each individual state.
  // There really are 3 states: Ready, Playing, Locked.
  // Current modelling is not great because we use 2 booleans to represent these states: `isPlaying` and `isLocked`.
  // There is a better, simpler way.
  clickPlay() {
    if (this.isLocked) return;

    if (this.isPlaying) {
      this.stopPlayback();
      this.isPlaying = false;
    } else {
      this.startPlayback();
      this.isPlaying = true;
    }
  }

  clickPrev(event) {
    if (this.isLocked) return;

    if (!this.isPlaying) {
      this.previousSong();
      return;
    }

    if (event.doubleClick) {
      this.previousSong()
    } else {
      this.rewind(5);
    }
  }

  clickNext(event) {
    if (this.isLocked) return;

    if (!this.isPlaying) {
      this.nextSong();
      return;
    }

    if (event.doubleClick) {
      this.player.nextSong();
    } else {
      this.player.fastForward(5);
    }
  }

  clickLock() {
    this.isLocked = !this.isLocked;
  }

  startPlayback() {}
  stopPlayback() {}
  nextSong() {}
  previousSong() {}
  fastForward(time) {}
}
