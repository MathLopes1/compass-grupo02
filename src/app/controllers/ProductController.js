const ProductService = require('../service/productService.js');

class ProductController {
    
  async create(req, res) {
    try {
      const result = await ProductService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({
        'message': 'Bad Request',
        'details': [{'message': error }]
      });
    }
  }
}

module.exports = new ProductController();