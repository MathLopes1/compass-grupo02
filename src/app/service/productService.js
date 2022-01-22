
const ProductRepository = require('../../app/repository/productRepository');
const employeesSchema = require('../schema/employees');

class ProductService {

  async create(payload) {
      const employe = await employeesSchema.findOne({ employee_id: payload.employee_id, office: "gerente", situation: "activate" });

      if (employe == null) {
        throw "Funcionário não pode cadastrar produto";
      }

      const result = await ProductRepository.create(payload);

      return result;
  }
}

module.exports = new ProductService();