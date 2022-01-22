const express = require('express');
const router = require('./routes');
require('./database/index');

class App {
  constructor () {
    this.server = express();
    this.routes();
    this.middlewares();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    router(this.server);
  }
}
module.exports = new App().server;