const EmployeeService = require('../service/employeeService.js');

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
}

module.exports = new EmployeeController();