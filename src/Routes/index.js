const { Router } = require('express');
const employee = require('../routes/employeeRouter');
const product = require('../routes/productRouter');

module.exports = server => {
  server.use((req, res, next) => {
    employee(server, new Router());
    // product(server, new Router());
    next();
  });
}
