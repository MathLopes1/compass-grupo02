const { Router } = require('express');
const employee = require('../routes/employeeRouter')

module.exports = server => {
  server.use((req, res, next) => {
    employee(server, new Router());
    next();
  });
}