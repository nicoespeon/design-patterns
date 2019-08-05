class Application {
  async main() {
    const database = await Database.getInstance();
    database.query("SELECT …");

    // …

    const db = await Database.getInstance();
    db.query("SELECT …");

    // `database` and `db` are actually the same instance.
  }
}

// Database Singleton
class Database {
  // In other OOP languages, we'd make the constructor private so you can't use it.
  async getInstance() {
    if (this.instance === null) {
      // Here we can handle things like multi-thread, ensure we don't have 2 instances of the DB.
      await this.acquireThreadLock();

      if (this.instance === null) {
        this.instance = new Database();
      }
    }

    return this.instance;
  }

  query(sql) {
    // All queries will go through this. We can put some logging / caching / throttling logic there.
  }
}

// Singleton is often overused for its short-term benefit: providing a global access to the instance.
// People forget the first benefit that could be a problem: prevent from having more than one instance.
// Singleton are always challenging to test, because tests become coupled through it.
// Thus, Singleton often mask bad design. Don't rush for it. Use when you want to restrict the number of instances.
