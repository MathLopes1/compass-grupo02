const EmployeesRepository = require('../../app/repository/employeesRepository.js');

class EmployeeService {
  async create(payload) {
    const dados = await EmployeesRepository.create(payload);
    return dados;
  }
}


module.exports = new EmployeeService();