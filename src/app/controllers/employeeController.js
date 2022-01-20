const EmployeeService = require('../service/employeeService.js');

class EmployeeController  {
  async create(req, res) {
    try {
      const result = await EmployeeService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json( error.message );
    }
  }
}

module.exports = new EmployeeController();