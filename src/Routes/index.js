const { Router } = require('express');
const employeeRouter = require('../routes/employeeRouter.js');
const productRouter = require('../Routes/productRouter.js')


module.exports = server => {
  server.use((req, res, next) => {
    employeeRouter(server, new Router());
    productRouter(server,new Router())
    next();
  });
};