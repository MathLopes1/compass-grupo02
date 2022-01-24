const EmployeeController = require('../app/controllers/employeeController.js');
const createValidation = require('../app/validation/employee/create');
const deleteValidation = require('../app/validation/employee/delete');
const updateValidation = require('../app/validation/employee/update');

module.exports = (server, routes, prefix = '/api/v1/employee') => {
  routes.post('/', createValidation, EmployeeController.create)
  routes.get('/',  EmployeeController.getAllEmployees)
  routes.put('/:id', updateValidation, EmployeeController.updateEmployee)
  routes.delete('/:id', deleteValidation, EmployeeController.deleteEmployee)
  server.use(prefix, routes);
}