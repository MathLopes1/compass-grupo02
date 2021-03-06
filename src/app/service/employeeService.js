const EmployeesRepository = require('../../app/repository/employeesRepository.js');

class EmployeeService {
  async create(payload) {
    function formatDataPtToEn(data) {
      var dia = data.split("/")[0];
      var mes = data.split("/")[1];
      var ano = data.split("/")[2];

      return ano + '-' + ("0" + mes).slice(-2) + '-' + ("0" + dia).slice(-2);
    }

    const dados = await EmployeesRepository.create({
      'name': payload.name,
      'cpf': payload.cpf,
      'office': payload.office,
      'birthday': new Date(formatDataPtToEn(payload.birthday))
    });

    function formatCpf(text) {
      const badchars = /[^\d]/g
      const mask = /(\d{3})(\d{3})(\d{3})(\d{2})/
      const cpf = new String(text).replace(badchars, "");
      return cpf.replace(mask, "$1.$2.$3-$4");
    }

    function convertDateEnToPt(date) {
      let d = new Date(date).toISOString().split('T')[0];
      let datePt = new Date(d).toISOString().replace('-', '/').split('T')[0].replace('-', '/');

      return datePt;
    }

    const result = {
      'employee_id': dados.employee_id,
      'name': dados.name,
      'cpf': formatCpf(dados.cpf),
      'office': dados.office,
      'birthday': convertDateEnToPt(dados.birthday),
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
    function formatDataPtToEn(data) {
      var dia = data.split("/")[0];
      var mes = data.split("/")[1];
      var ano = data.split("/")[2];

      return ano + '-' + ("0" + mes).slice(-2) + '-' + ("0" + dia).slice(-2);
    }

    const dados = await EmployeesRepository.update(id, {
      'name': payload.name,
      'cpf': payload.cpf,
      'office': payload.office,
      'birthday': new Date(formatDataPtToEn(payload.birthday)),
      'situation': payload.situation,
    });

    function formatCpf(text) {
      const badchars = /[^\d]/g
      const mask = /(\d{3})(\d{3})(\d{3})(\d{2})/
      const cpf = new String(text).replace(badchars, "");
      return cpf.replace(mask, "$1.$2.$3-$4");
    }

    function convertDateEnToPt(date) {
      let d = new Date(date).toISOString().split('T')[0];
      let datePt = new Date(d).toISOString().replace('-', '/').split('T')[0].replace('-', '/');

      return datePt;
    }

    const result = {
      'employee_id': dados.employee_id,
      'name': dados.name,
      'cpf': formatCpf(dados.cpf),
      'office': dados.office,
      'birthday': convertDateEnToPt(dados.birthday),
      'situation': dados.situation
    }

    return result;
  }

  async findId(id) {
    return EmployeesRepository.findId(id);
  }
}


module.exports = new EmployeeService();