const EmployeeService = require('../service/employeeService.js');
const employeesSchema = require('../schema/employees');


class EmployeeController  {
  async register(req, res) {
    try {
      const result = await EmployeeService.create(req.body);
      return res.status(201).json(result, {} );
    } catch (error) {
      return res.status(500).json( error.message );
    }
  }

  async getAllEmployes(req, res){
    try {
   const allEmployees = await employeesSchema.find({})

        return res.status(200).json(allEmployees)

    } catch (error) {

        return res.status(500).json(error.message)

    }

}

}



module.exports = new EmployeeController();