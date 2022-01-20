const ProductsRepository = require('../../app/repository/productsRepository.js');

class ProductsService {
  async create(payload) {
    const result = await ProductsRepository.create(payload);
    return result;
  }
}

module.exports = new ProductsService();