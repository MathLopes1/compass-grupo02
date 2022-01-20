const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: String,
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employees',
        required: true
    }
});

const product = mongoose.model('Product', productSchema)
console.log("product")
console.log(product)
module.exports = product;
