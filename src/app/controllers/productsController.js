const ProductsService = require('../service/productsService.js');

class ProductsController  {
  async create(req, res) {
    try {
      const result = await ProductsService.find();
      return res.status(201).json(result);
      
    } catch (error) {
      return res.status(500).json( error.message );
    }
  }
}

module.exports = new ProductsController();