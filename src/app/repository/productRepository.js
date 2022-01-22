
const productSchema = require('../schema/product.js');

class ProductRepository  {
  async create(payload) {
    return productSchema.create(payload);
  }

  async find(payload){
    return productSchema.find(payload)
  }
}

module.exports = new ProductRepository();