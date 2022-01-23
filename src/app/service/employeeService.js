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
  async update(id, payload) {

    const dados = await EmployeesRepository.update(id, payload);

    return dados;

  }

  async findId(id) {

    return EmployeesRepository.findId(id);

  }
}


module.exports = new EmployeeService();