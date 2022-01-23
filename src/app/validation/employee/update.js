const Joi = require('joi');

module.exports = async (req, res, next) => {
    try {
        function isValidCPF(number) {
            if (number == "00000000000") return false;
            if (number.length != 11) return false;

            return true;
        }

        if (req.body.cpf && !isValidCPF(req.body.cpf)) {
            throw {
                message: 'Bad Request',
                details: 'CPF inválido'
            };
        }

        if (req.body.situation != null) {
            if (req.body.situation !== 'deactivate') {
                throw {
                    message: 'Bad Request',
                    details: 'Situation is not deactivate ou activate'
                };
            }
        }

        const schema = Joi.object({
            name: Joi.string(),
            cpf: Joi.number(),
            office: Joi.string(),
            situation: Joi.string(),
            birthday: Joi.date().max('now')
        });

        const { errorBody } = await schema.validate(req.body, { abortEarl: true });

        const { errorParams } = await Joi.string().guid({ version: ['uuidv4'] }).validate(req.params.id, { abortEarl: true });

        if (errorBody || errorParams) {
            throw {
                message: 'Bad Request',
                details: error.details
            };
        }

        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
}