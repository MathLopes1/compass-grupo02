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
  async update(id, payload) {

    await employeesSchema.updateOne({ employee_id: id }, payload);

    return employeesSchema.findOne({ employee_id: id });

  }

  async findId(id) {

    return employeesSchema.findOne({ employee_id: id });

  }
}


module.exports = new employeesRepository();