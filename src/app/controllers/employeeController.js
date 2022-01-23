const EmployeeService = require('../service/employeeService.js');
const employeesSchema = require('../schema/employees');

class EmployeeController {
  async create(req, res) {

    try {
      const dados = await EmployeeService.create(req.body);
      return res.status(201).json({
        'employee_id': dados.employee_id,
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
        'details': [{ 'message': error.message, }]
      });
    }
  }

  async getAllEmployees(req, res) {
    try {
      const name = req.query.name
      if (name) {
        const allEmployees = await EmployeeService.find({ name: { $regex: name } });
        if (!allEmployees.length) {
          return res.status(404).json({ message: "No products found!" });
        }
        return res.status(200).json(allEmployees);
      } else {
        const allEmployees = await EmployeeService.find({});
        return res.status(200).json(allEmployees);
      }
    } catch (error) {
      return res.status(500).json(error.message)
    }

  }
  async updateEmployee(req, res) {

    const employeeId = req.params.employee_id;

    const dados = req.body;

    try {

      const updatedEmployee = await EmployeeService.update(employeeId, dados);

      res.status(200).json({

        'employee_id': updatedEmployee.employee_id,

        'name': updatedEmployee.name,

        'cpf': updatedEmployee.cpf,

        'office': updatedEmployee.office,

        'birthday': updatedEmployee.birthday,

        'situation': updatedEmployee.situation

      });

    } catch (error) {

      return res.status(400).json({

        'message': 'bad request',

        'details': [{ 'message': error.message, }]

      })

    }

  }

  async deleteEmployee(req, res) {
    try {
      const id = req.params.id;
      const employee = await EmployeeService.findOne({ employee_id: id });

      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }

      await EmployeeService.delete({ employee_id: id });
      return res.status(204).json();
    } catch (error) {
      return res.status(400).json({
        'message': 'Bad Request',
        'details': [{ 'message': error.message, }]
      });
    }
  }
}

module.exports = new EmployeeController();