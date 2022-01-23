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
      if(name){
        const allEmployees = await EmployeeService.find({name:{$regex: name}});
        if(!allEmployees.length){
          return res.status(404).json({message: "No products found!" });
        }
        return res.status(200).json(allEmployees);
      }else{
        const allEmployees = await EmployeeService.find({});
        return res.status(200).json(allEmployees);
      }
    } catch (error) {
      return res.status(500).json(error.message)
    }

  }
  async updateEmployee(req, res) {

    employeesSchema.findById(req.params.id, function (error, employee) {

      if (error)
        res.send('Employee id not found' + error)

      employee.name = req.body.name
      employee.cpf = req.body.cpf
      employee.office = req.body.office
      employee.birthday = req.body.birthday

      employee.save(function (error) {

        if (error)
          res.send('error updating employee' + error)



        res.json({
          '_id': employee.employee_id,
          'name': employee.name,
          'cpf': employee.cpf,
          'office': employee.office,
          'birthday': employee.birthday,
          'situation': employee.situation,
          'createdAt': employee.createdAt,
          'updatedAt': employee.updatedAt
        })

      })
    })
  }

  async deleteEmployee(req, res) {
    try {
      const id = req.params.id;
      const employee = await EmployeeService.findOne({ employee_id: id });

      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' })
      }

        await EmployeeService.delete({ employee_id: id })
        return res.status(204).json({ message: 'Employee successfully deleted' })
    } catch (error) {
      return res.status(400).json({
        'message': 'Bad Request',
        'details': [{ 'message': error.message, }]
      });
    }
  }
}

module.exports = new EmployeeController();