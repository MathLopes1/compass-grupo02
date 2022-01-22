const EmployeesRepository = require('../../app/repository/employeesRepository.js');

class EmployeeService {
  async create(payload) {
    const dados = await EmployeesRepository.create(payload);
    return dados;
  }

  async find(payload){
    const allEmployees = await EmployeesRepository.find(payload);
    return allEmployees;
  }

  async findOne(payload){
    const employee = await EmployeesRepository.findOne(payload);
    return employee;
  }
}


module.exports = new EmployeeService();