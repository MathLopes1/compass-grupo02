const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    office: {
        type: String,
        enum: ['gerente', 'vendedor', 'caixa'],
        required: true,
    },
    birthday: {
        type: Date,
        required: true
    },
    situation: {
        type: String,
        default: 'activate',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});

const employees = mongoose.model('Employees', employeeSchema)
module.exports = employees;
