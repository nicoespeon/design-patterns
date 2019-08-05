// In JS, we'd usually import the object directly.
const database = require('../database');

class Application {
  async main() {
    database.query("SELECT …");

    // …

    database.query("SELECT …");
  }
}

// database.js
export default {
  query(sql) {
    // All queries will go through this. We can put some logging / caching / throttling logic there.
  }
}

// In this case though, we're directly depending on the concrete implementation of the Singleton.
// If the Singleton depends on the Infra like here (usually the case), that makes our code even harder to test.
// Using Dependency Injection (aka "passing the instance as a parameter" for functions) will solve this.
