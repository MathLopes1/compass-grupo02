const EmployeeController = require('../app/controllers/employeeController');

module.exports = (server, routes, prefix = '/app/v1/employee') => {
  routes.post('/',  EmployeeController.create)
  routes.get('/',  EmployeeController.getAllEmployes)
  routes.put('/:id',  EmployeeController.updateEmployee)
  routes.delete('/:id', EmployeeController.deleteEmployee)
  server.use(prefix, routes);

}