const ProductService = require('../service/productService.js');

class ProductController {
    
  async create(req, res) {
    console.log("ProductController")
    console.log(req.body)
    try {
      const result = await ProductService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json( error.message );
    }
  }
}

module.exports = new ProductController();