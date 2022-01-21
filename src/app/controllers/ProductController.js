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
  async create(req, res){ 
    try {
        const result = await productSchema.create(req.body)
        return res.status(201).json(result)

    } catch (error) {

        return res.status(400).json({
          'message': 'Bad request',
          'details': [{'message':error}]
        })

    }
}
}
module.exports = new ProductController();