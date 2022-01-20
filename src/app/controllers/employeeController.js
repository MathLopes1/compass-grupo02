const EmployeeService = require('../service/employeeService.js');
const employeesSchema = require('../schema/employees');

class EmployeeController  {
  async register(req, res) {
    try {
      const result = await EmployeeService.create(req.body);
      return res.status(201).json(result);
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
  async updateEmployee(req, res){ 
       
    const id = req.params.id
    const { name, cpf, office, birthday} = req.body
    const employee = { name, cpf, office, birthday}
    
    try {
 const updatedEmployee = await employeesSchema.updateOne({ _id: id, employee}, {new:true})

      if(updatedEmployee.matchedCount === 0) { 

       return res.status(422).json({message: 'Employee not found'})
        
      }

      return res.status(200).json(employee)

  } catch (error) {

      return res.status(500).json(error.message)

  }

}
}
module.exports = new EmployeeController();