const EmployeeService = require('../service/employeeService.js');

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
        'details': [{
          'message': error.message,
        }]
      });
    }
  }

  async getAllEmployees(req, res) {
    try {
      const name = req.query.name
      const office = req.query.office

      if (name) {
        const allEmployees = await EmployeeService.find({
          name: {
            $regex: name
          }
        }, {
          office: {
            $regex: office
          }
        });
        if (!allEmployees.length) {
          return res.status(404).json({
            message: "No Employee found!"
          });
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

        'details': [{
          'message': error.message,
        }]

      })

    }

  }

  async deleteEmployee(req, res) {

    const id = req.params.id

    const employee = await EmployeeService.findOne({
      _id: id
    })

    if (!employee) {

      return res.status(404).json({
        message: 'Employee not found'
      })

    }
  }
}
module.exports = new EmployeeController();