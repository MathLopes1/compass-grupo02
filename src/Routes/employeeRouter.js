const EmployeeController = require('../app/controllers/employeeController');

module.exports = (server, routes, prefix = '/api/v1/employee') => {
  routes.post('/',  EmployeeController.create)
  routes.get('/',  EmployeeController.getAllEmployees)
  routes.put('/:uuid',  EmployeeController.updateEmployee)
  routes.delete('/:uuid', EmployeeController.deleteEmployee)
  server.use(prefix, routes);
}