const employeesSchema = require('../schema/employees');

class employeesRepository  {
  async create(payload) {
    return employeesSchema.create(payload);
  }
}

module.exports = new employeesRepository();