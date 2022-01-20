const EmployeeController = require('../app/controllers/employeeController');


module.exports = (server, routes, prefix = '/app/v1') => {
  routes.post('/employee',  EmployeeController.register)
  routes.get('/employee',  EmployeeController.getAllEmployes)
  routes.put('/employee/:id',  EmployeeController.updateEmployee)
  server.use(prefix, routes);

}