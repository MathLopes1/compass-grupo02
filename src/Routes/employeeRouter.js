const EmployeeController = require('../app/controllers/employeeController');

module.exports = (server, routes, prefix = '/api/v1/employee') => {
  routes.post('/',  EmployeeController.create)
  routes.get('/',  EmployeeController.getAllEmployees)
  routes.put('/:id',  EmployeeController.updateEmployee)
  routes.delete('/:id', EmployeeController.deleteEmployee)
  server.use(prefix, routes);
}