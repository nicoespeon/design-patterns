class Application {
  main() {
    if (useFacebook) {
      this.network = new Facebook();
    } else {
      this.network = new LinkedIn();
    }

    this.spammer = new SocialSpammer();
  }

  sendSpamToFriends(profile) {
    const friendsGraph = this.network.socialGraphRequest(profile.id, "friends");
    spammer.send(friendsGraph, "Hey, listen!");
  }

  sendSpamToCoworkers(profile) {
    const coworkersGraph = this.network.socialGraphRequest(profile.id, "coworkers");
    spammer.send(coworkersGraph, "A very important message!!");
  }
}

class SocialSpammer {
  // All collections NEED to expose the same data structure.
  // What if we want to change the data structure? We should adapt all collections & SocialSpammer too!
  send(socialGraph, message) {
    let currentPosition = 0;
    while (socialGraph[currentPosition]) {
      currentPosition++;
      const profile = socialGraph[currentPosition];
      sendEmail(profile.getEmail(), message);
    }
  }
}

class Facebook {
  socialGraphRequest(profileId, type) {
    // Retrieve collection of data from an HTTP call
  }
}

class LinkedIn {
  socialGraphRequest(profileId, type) {
    return this.fetchContacts(profileId).filter(contact => contact.type === type);
  }

  fetchContacts(profileId) {
    // Retrieve collection of data from an HTTP call
  }
}
