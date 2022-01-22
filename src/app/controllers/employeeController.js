const EmployeeService = require('../service/employeeService.js');
const employeesSchema = require('../schema/employees');

class EmployeeController {
  async create(req, res) {

    try {
      const dados = await EmployeeService.create(req.body);
      console.log(req.body)
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

  async getAllEmployes(req, res) {
    try {
      const allEmployees = await employeesSchema.find({})
      return res.status(200).json(allEmployees)

    } catch (error) {
      return res.status(500).json(error.message)

    }

  }
  async updateEmployee(req, res) {
    const id = req.params.id
    const { name, cpf, office, birthday } = req.body
    const employee = { name, cpf, office, birthday }
    try {
      const updatedEmployee = await employeesSchema.updateOne({ _id: id, employee }, { new: true })
      if (updatedEmployee.matchedCount === 0) {
        return res.status(422).json({ message: 'Employee not found' })
      }
      return res.status(200).json(employee)

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  async deleteEmployee(req, res) {
    const id = req.params.id
    const employee = await employeesSchema.findOne({ _id: id })
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' })
    }
    try {
      await employeesSchema.deleteOne({ _id: id })
      return res.status(204).json({ message: 'Employee successfully deleted!' })

    } catch (error) {
      return res.status(400).json(error.message)
    }
  }
}
module.exports = new EmployeeController();