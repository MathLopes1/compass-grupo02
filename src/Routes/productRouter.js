
const ProductController = require('../app/controllers/ProductController.js')
const createValidation = require('../app/validation/product/create');

module.exports = (server, routes, prefix = '/api/v1/product') => {
    routes.get('/', ProductController.findProducts)
    routes.post('/', createValidation, ProductController.createProduct);
    server.use(prefix, routes);
}






