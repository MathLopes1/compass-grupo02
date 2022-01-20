const express = require('express');
const router = require('./routes/index.js')
require('./database');

class App {
  constructor () {
    this.server = express()
    this.routes();
  }

  middlewares () {
    this.server.use(express.json())
  }

  routes () {
    router(this.server)
  }
}

module.exports = new App().server