const EmployeesRepository = require('../../database/index.js');

class EmployeesService {
  async create(payload) {
    const result = await EmployeesRepository.create(payload);
    return result;
  }
}

module.exports = new EmployeesService();