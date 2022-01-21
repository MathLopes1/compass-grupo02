
const ProductController = require('../app/controllers/ProductController.js')
const createValidation = require('../app/validation/product/create');

module.exports = (server, routes, prefix = '/api/v1/product') => {
    routes.get('/',ProductController.getAllProducts)
    routes.post('/product', createValidation, ProductController.create);
    server.use(prefix, routes);
  }






