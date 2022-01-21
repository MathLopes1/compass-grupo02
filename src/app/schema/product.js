const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    price: {
        type: mongoose.Schema.Types.Decimal128,
        require: true
    },
    employee_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employees',
        require: true
    }
});

const product = mongoose.model('Product', productSchema)
module.exports = product;
