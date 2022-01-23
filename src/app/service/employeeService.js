const EmployeesRepository = require('../../app/repository/employeesRepository.js');

class EmployeeService {
  async create(payload) {
    const dados = await EmployeesRepository.create({
      'name': payload.name,
      'cpf': payload.cpf,
      'office': payload.office,
      'birthday': new Date(payload.birthday)
    });

    function convertDateToPt(date) {
      let datePt = date.toLocaleString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }).replace('-', '/');

      return datePt;
    }

    const result = {
      'employee_id': dados.employee_id,
      'name': dados.name,
      'cpf': dados.cpf,
      'office': dados.office,
      'birthday': convertDateToPt(dados.birthday),
      'situation': dados.situation,
      'createdAt': dados.createdAt,
      'updatedAt': dados.updatedAt
    }

    return result;
  }

  async find(payload) {
    const allEmployees = await EmployeesRepository.find(payload);
    return allEmployees;
  }

  async findOne(payload) {
    const employee = await EmployeesRepository.findOne(payload);
    return employee;
  }

  async delete(payload) {
    const employee = await EmployeesRepository.delete(payload);
    return employee;
  }

  async update(id, payload) {
    const dados = await EmployeesRepository.update(id, {
      'name': payload.name,
      'cpf': payload.cpf,
      'office': payload.office,
      'birthday': new Date(payload.birthday),
      'situation': payload.situation,
    });

    function formataCPF(cpf){
      cpf = cpf.replace(/[^\d]/g, "");
      
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    function convertDateToPt(date) {
      let datePt = date.toLocaleString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }).replace('-', '/');

      return datePt;
    } 

    const result = {
      'employee_id': dados.employee_id,
      'name': dados.name,
      'cpf': formataCPF(dados.cpf),
      'office': dados.office,
      'birthday': convertDateToPt(dados.birthday),
      'situation': dados.situation
    }

    return result;
  }

  async findId(id) {
    return EmployeesRepository.findId(id);
  }
}


module.exports = new EmployeeService();