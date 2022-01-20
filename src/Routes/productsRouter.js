const ProductsController = require('../app/controllers/productsController.js');

module.exports = (server, routes, prefix = '/api/v1/product') => {
  routes.get('/',  ProductsController.create);
  server.use(prefix, routes);
}
