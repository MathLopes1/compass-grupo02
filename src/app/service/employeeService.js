const EmployeesRepository = require('../../app/repository/employeesRepository');

class EmployeesService {
  async create(payload) {
    const result = await EmployeesRepository.create(payload);
    return result;
  } 
}

module.exports = new EmployeesService();