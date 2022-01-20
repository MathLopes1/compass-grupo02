const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    cpf: {
        type: String,
        require: true,
        unique: true
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
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});

const employees = mongoose.model('Employees', employeeSchema)
module.exports = employees;
