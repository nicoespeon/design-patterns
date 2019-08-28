class Application {
  main() {
    const aYouTubeService = new ThirdPartyYouTube();
    const manager = new YouTubeManager(aYouTubeService);
    manager.reactOnUserInput();
  }
}

// The client that uses the service directly.
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

// The original service.
// This thing could be defined outside (hence "ThirdParty").
class ThirdPartyYouTube {
  listVideos() {
    // Send API requests to YouTube.
  }

  getVideoInfo() {
    // Send API requests to YouTube.
  }
}

// What if we want to cache results, so we can save user bandwidth and reduce YouTube API consumption?
// If we have access to the code, we could add cache behaviour in the class. But that violates Single Responsibility Principle.
// Also, we might need to have the service without cache for Premium users. So we might decide to add a boolean flag and things will become messy…
