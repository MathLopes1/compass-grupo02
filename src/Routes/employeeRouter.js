const EmployeeController = require('../app/controllers/employeeController');

module.exports = (server, routes, prefix = '/app/v1') => {
  routes.post('/employee',  EmployeeController.register)
  routes.get('/employee',  EmployeeController.getAllEmployes)
  server.use(prefix, routes);

}