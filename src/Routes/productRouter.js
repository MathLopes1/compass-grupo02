const ProductController = require('../app/controllers/ProductController.js')

module.exports = (server, routes, prefix = '/api/v1/product') => {
    routes.get('/',ProductController.getAllProducts);
    server.use(prefix, routes);
  }