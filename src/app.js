const express = require('express');
const router = require('./routes');
const cors = require('cors');
require('./infra/database/mongo/index');

class App {
  constructor () {
    this.server = express();
    this.routes();
    this.middlewares();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors())
  }

  routes() {
    router(this.server);
  }
}

module.exports = new App().server;