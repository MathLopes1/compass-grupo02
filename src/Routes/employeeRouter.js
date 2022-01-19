const EmployeeController = require('../app/controllers/employeeController');

module.exports = (server, routes, prefix = '/api/v1/employee') => {
  routes.post('/', EmployeeController.create);
  server.use(prefix, routes);
}