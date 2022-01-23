const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const employeeSchema = mongoose.Schema({
    employee_id: {
        type: String,
        default: uuidv4(),
        index:true,
        mongoose:mongoose.ObjectId
    },
    name: {
        type: String,
        require: true
    },
    cpf: {
        type: Number,
        require: true,
        unique: true,
        maxlength: 11,
        minlength: 11
    },
    office: {
        type: String,
        enum: ['gerente', 'vendedor', 'caixa'],
        require: true,
    },
    birthday: {
        type: Date,
        require: true
    },
    situation: {
        type: String,
        default: 'activate',
        require: true
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
    }
});

employeeSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        delete ret._id;
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;
    }
}); 

const employees = mongoose.model('Employees', employeeSchema)
module.exports = employees;
