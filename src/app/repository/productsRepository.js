const productsSchema = require('../schema/product.js');

class productsRepository  {
  async create(payload) {
    return productsSchema.create(payload);
  }
}

module.exports = new productsRepository();