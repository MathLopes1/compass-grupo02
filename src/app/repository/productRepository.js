const productSchema = require('../schema/product');

class ProductRepository  {
  async create(payload) {
    return productSchema.create(payload);
  }
}

module.exports = new ProductRepository();