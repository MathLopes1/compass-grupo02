const EmployeeService = require('../service/employeeService.js');
const employeesSchema = require('../schema/employees');

class EmployeeController {
  async create(req, res) {

    try {
      const dados = await EmployeeService.create(req.body);
      console.log(req.body)
      return res.status(201).json({
        '_id': dados.id,
        'name': dados.name,
        'cpf': dados.cpf,
        'office': dados.office,
        'birthday': dados.birthday,
        'situation': dados.situation,
        'createdAt': dados.createdAt,
        'updatedAt': dados.updatedAt
      });
    } catch (error) {
      return res.status(400).json({
        'message': 'bad request',
        'details': [{'message': error.message,}]
      });
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