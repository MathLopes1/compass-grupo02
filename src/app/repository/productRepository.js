const productSchema = require('../schema/product');

class ProductRepository  {
  async create(payload) {
    console.log("repository")
    console.log(payload)
    return productSchema.create(payload);
  }
}

module.exports = new ProductRepository();