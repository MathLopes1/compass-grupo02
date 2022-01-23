const EmployeeController = require('../app/controllers/employeeController.js');

module.exports = (server, routes, prefix = '/app/v1/employee') => {
  routes.post('/',  EmployeeController.create)
  routes.get('/',  EmployeeController.getAllEmployees)
  routes.put('/:id',  EmployeeController.updateEmployee)
  routes.delete('/:id', EmployeeController.deleteEmployee)
  server.use(prefix, routes);
}