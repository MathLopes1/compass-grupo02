const employeesSchema = require('../schema/employees.js');

class employeesRepository {
  async create(payload) {
    return employeesSchema.create(payload);
  }

  async find(payload){
    return employeesSchema.find(payload);
  }

  async findOne(payload){
    return employeesSchema.findOne(payload);
  }

  async delete(payload) {
    return employeesSchema.deleteOne(payload);
  }
}

module.exports = new employeesRepository();