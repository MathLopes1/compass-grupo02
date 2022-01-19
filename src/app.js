const express = require('express');
const router = require('./routes')
require('./database');

class App {
  constructor () {
    this.server = express()
  }

  middlewares () {
    this.server.use(express.json())
  }

  routes () {
    router(this.server)
  }
}

module.exports = new App().server