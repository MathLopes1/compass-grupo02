const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const productSchema = new mongoose.Schema({
    product_id: {
        type: String,
        default: uuidv4(),
        index:true,
        mongoose:mongoose.ObjectId
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
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
        select: false
    },
    employee_id: {
        type: String,
        default: uuidv4(),
        mongoose:mongoose.ObjectId,
        ref: 'Employees',
        required: true
    }
});

productSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        delete ret._id;
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;
    }
}); 

const product = mongoose.model('Product', productSchema);

module.exports = product;
