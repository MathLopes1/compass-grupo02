const ProductRepository = require('../../app/repository/productRepository.js');

class ProductService {
  async create(payload) {

    const result = await ProductRepository.create(payload);
    return result;
  }
}

module.exports = new ProductService();