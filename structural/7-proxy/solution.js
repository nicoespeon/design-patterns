class Application {
  main() {
    const aYouTubeService = new ThirdPartyYouTube();
    const aYouTubeProxy = new CachedYouTubeClass(aYouTubeService);
    const manager = new YouTubeManager(aYouTubeProxy);
    manager.reactOnUserInput();
  }
}

// The client that thinks it uses the service directly.
// He's not aware the service is proxied.
class YouTubeManager {
  constructor(service) {
    this.service = service;
  }

  reactOnUserInput() {
    this.renderVideoPage();
    this.renderListPanel();
  }

  renderVideoPage() {
    this.service.getVideoInfo("39487");
  }

  renderListPanel() {
    this.service.listVideos();
  }
}

// Proxy. It implements the same interface than the proxied class.
// Implement some caching on top of the original service.
class CachedYouTubeClass {
  listCache = null;
  videoCache = null;
  needReset = false;

  constructor(service) {
    this.service = service;
  }

  listVideos() {
    if (!this.listCache || this.needReset) {
      this.listCache = this.service.listVideos();
    }

    return this.listCache;
  }

  getVideoInfo(id) {
    if (!this.videoCache || this.needReset) {
      this.videoCache = this.service.getVideoInfo(id);
    }

    return this.videoCache;
  }
}

// The original service, untouched.
// This thing could be defined outside (hence "ThirdParty").
class ThirdPartyYouTube {
  listVideos() {
    // Send API requests to YouTube.
  }

  getVideoInfo() {
    // Send API requests to YouTube.
  }
}
