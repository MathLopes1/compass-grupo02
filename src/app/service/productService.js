const ProductRepository = require('../../app/repository/productRepository');

class ProductService {

  async create(payload) {
    const result = await ProductRepository.create(payload);
    return result;
  }
}
//só funcioanrios que são gerentes e ativos podem cadastrar produto
//validação de negocio

module.exports = new ProductService();