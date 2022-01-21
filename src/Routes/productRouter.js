const ProductController = require('../app/controllers/ProductController');
const createValidation = require('../app/validation/product/create');

module.exports = (server, routes, prefix = '/api/v1') => {
  routes.post('/product', createValidation, ProductController.create);
  server.use(prefix, routes);
}

