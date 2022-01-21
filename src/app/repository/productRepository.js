
const productSchema = require('../schema/product.js');

class ProductRepository  {
  async create(payload) {
    return productSchema.create(payload);
  }
}

module.exports = new ProductRepository();