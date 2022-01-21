const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const productSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4(),
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: mongoose.Schema.Types.Decimal128,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    employee_id: {
        type: String,
        ref: 'Employees',
        required: true
    }
});

const product = mongoose.model('Product', productSchema);

module.exports = product;
