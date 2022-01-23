const ProductService = require('../service/productService.js');

class ProductController {

  async createProduct(req, res) {
    try {
      const result = await ProductService.create(req.body);
      return res.status(201).json(result);

    } catch (error) {
      return res.status(400).json({
        'message': 'Bad request',
        'details': [{ 'message': error }]
      });
    }
  }

  async findProducts(req, res) {
    try {
      const name = req.query.name;
      const max_price = req.query.max_price;
      const min_price = req.query.min_price;

      if (name && max_price && min_price) {
        const queryProducts = await ProductService.find({ name: { $regex: name }, price: { $lte: max_price, $gte: min_price } });

        if (!queryProducts.length) {
          return res.status(404).json({message: "No products found!" });
        }

        return res.status(201).json(queryProducts);

      } else if (name && max_price) {
        const queryProducts = await ProductService.find({ name: { $regex: name }, price: { $lte: max_price } });

        if (!queryProducts.length) {
          return res.status(404).json({message: "No products found!" });
        }

        return res.status(201).json(queryProducts);

      } else if (name && min_price) {
        const queryProducts = await ProductService.find({ name: { $regex: name }, price: { $gte: min_price } });

        if (!queryProducts.length) {
          return res.status(404).json({message: "No products found!" });
        }

        return res.status(201).json(queryProducts);

      } else if (max_price && min_price) {
        const queryProducts = await ProductService.find({ price: { $lte: max_price, $gte: min_price } });

        if (!queryProducts.length) {
          return res.status(404).json({message: "No products found!" });
        }
        
        return res.status(201).json(queryProducts);

      } else if (name) {
        const queryProducts = await ProductService.find({ name: { $regex: name } });

        if (!queryProducts.length) {
          return res.status(404).json({message: "No products found!" });
        }

        return res.status(201).json(queryProducts);

      } else if (max_price) {
        const queryProducts = await ProductService.find({ price: { $lte: max_price } });

        if (!queryProducts.length) {
          return res.status(404).json({message: "No products found!" });
        }

        return res.status(201).json(queryProducts);

      } else if (min_price) {
        const queryProducts = await ProductService.find({ price: { $gte: min_price } });

        if (!queryProducts.length) {
          return res.status(404).json({message: "No products found!" });
        }

        return res.status(201).json(queryProducts);

      }

      const allProducts = await ProductService.find();
      return res.status(201).json(allProducts);

    } catch (error) {
      return res.status(400).json({
        'message': 'Bad request',
        'details': [{ 'message': error }]
      });
    }
  }
}

module.exports = new ProductController();