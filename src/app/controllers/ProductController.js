const ProductService = require('../service/productService.js');
const productSchema = require('../schema/product.js')

class ProductController {

  async findProducts(req, res) {
    try {
      const name = req.query.name
      const max_price = req.query.max_price
      const min_price = req.query.min_price

      if (name) {
        const queryProducts = await ProductService.find({ name: { $regex: name } })
        return res.status(201).json(queryProducts)

      }

      if (max_price) {
        const queryProducts = await ProductService.find({ price: { $lte: max_price } })
        return res.status(201).json(queryProducts)
      }

      if (min_price) {
        const queryProducts = await ProductService.find({ price: { $gte: min_price } })
        return res.status(201).json(queryProducts)
      }
        const allProducts = await ProductService.find()
        return res.status(201).json(allProducts)

    } catch (error) {
      return res.status(400).json({
        'message': 'Bad request',
        'details': [{ 'message': error }]
      })
    }
  }

  async create(req, res) {
    try {
      const result = await productSchema.create(req.body)
      return res.status(201).json(result)

    } catch (error) {
      return res.status(400).json({
        'message': 'Bad request',
        'details': [{ 'message': error }]
      })
    }
  }
}

module.exports = new ProductController();