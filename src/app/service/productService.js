
const ProductRepository = require('../../app/repository/productRepository');
const employeesSchema = require('../schema/employees');

class ProductService {

  async create(payload) {
      const employe = await employeesSchema.findOne({ employee_id: payload.employee_id, office: "gerente", situation: "activate" });

      if (employe == null) {
        throw "Employee cannot register product";
      }

      const result = await ProductRepository.create(payload);

      return result;
  }

  async find(payload){
    const allProducts = await ProductRepository.find(payload);
    return allProducts;
  }
}

module.exports = new ProductService();