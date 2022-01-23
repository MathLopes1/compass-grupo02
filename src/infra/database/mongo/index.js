const mongoose = require('mongoose');

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    return mongoose.connect('mongodb://127.0.0.1:27017/employee');
  }
}

module.exports = new Database().connect();