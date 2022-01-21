const ProductService = require('../service/productService.js');
const productSchema = require('../schema/product.js')

class ProductController {
    
  async getAllProducts(req,res){

    try {
        const allProducts = await productSchema.find({})
        return res.status(201).json(allProducts)
    } catch (error) {
        return res.status(500).json(error.message)
    }
  }
}

module.exports = new ProductController();