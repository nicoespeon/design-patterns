class Application {
  async main() {
    const database = new Database();
    database.query("SELECT …");

    // …

    // Now we have 2 different Database instances that could access our DB.
    // What if we need to ensure a limited number of connections?
    const db = new Database();
    db.query("SELECT …");
  }
}

class Database {
  query(sql) {}
}
