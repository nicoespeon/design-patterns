class Application {
  main() {
    if (useFacebook) {
      this.network = new Facebook();
    } else {
      this.network = new LinkedIn();
    }

    this.spammer = new SocialSpammer();
  }

  // Regardless the chosen network, we'll get the same iterator interface.
  sendSpamToFriends(profile) {
    const iterator = this.network.createFriendsIterator(profile.id);
    spammer.send(iterator, "Hey, listen!");
  }

  // We can define different iterators for the same collection.
  sendSpamToCoworkers(profile) {
    const iterator = this.network.createCoworkersIterator(profile.id);
    spammer.send(iterator, "A very important message!!");
  }
}

// The one using the iterator.
// The good thing is that it doesn't know about the concrete collection.
// We could decide to add new networks and this wouldn't know about it.
class SocialSpammer {
  send(iterator, message) {
    while (iterator.hasMore()) {
      const profile = iterator.getNext();
      sendEmail(profile.getEmail(), message);
    }

    // In JS, we might be able to use for-in statements too
  }
}

// Collections of data.
// They would all implement the same `SocialNetwork` interface.
class Facebook {
  createFriendsIterator(profileId) {
    return new FacebookIterator(this, profileId, "friends");
  }

  createCoworkersIterator(profileId) {
    return new FacebookIterator(this, profileId, "coworkers");
  }

  socialGraphRequest(profileId, type) {
    // Retrieve collection of data from an HTTP call
  }
}

class LinkedIn {
  createFriendsIterator(profileId) {
    return new LinkedInIterator(this, accountId, "friends");
  }

  createCoworkersIterator(profileId) {
    return new LinkedInIterator(this, accountId, "coworkers");
  }

  fetchContacts(profileId) {
    // Retrieve collection of data from an HTTP call
  }
}

// Iterators implement the same interface.
// They extract the "how you traverse the collection" from the Collections.
class FacebookIterator {
  cache = null;
  currentPosition = 0;

  constructor(facebook, profileId, type) {
    this.facebook = facebook;
    this.profileId = profileId;
    this.type = type;
  }

  hasMore() {
    this.lazyInit();
    return this.cache.length < this.currentPosition;
  }

  // The iterator decides how it will traverse the collection.
  getNext() {
    if (this.hasMore()) {
      this.currentPosition++;
      return this.cache[this.currentPosition];
    }
  }

  // We could decide to implement custom things like cache or authentication.
  // The consumer wouldn't know. Usually, we'd make these private methods.
  lazyInit() {
    if (!this.cache) {
      this.cache = this.facebook.socialGraphRequest(this.profileId, this.type);
    }
  }
}

class LinkedInIterator {
  currentPosition = 0;

  constructor(linkedIn, profileId, type) {
    this.linkedIn = linkedIn;
    this.profileId = profileId;
    this.type = type;
  }

  hasMore() {
    return this.getData().length < this.currentPosition;
  }

  getNext() {
    if (this.hasMore()) {
      this.currentPosition++;
      return this.getData()[this.currentPosition];
    }
  }

  getData() {
    const contacts = this.linkedIn.fetchContacts();
    return contacts.filter(contact => contact.type === this.type);
  }
}
