const JoiRequire = require('joi');

const dateJoi = require ('@joi/date');

const Joi = JoiRequire.extend(dateJoi);

module.exports = async (req, res, next) => {
  try {
    function isValidCPF(number) {

      if (number == "00000000000") return false;
      if (number.length != 11) return false;

      return true;
    }

    const schema = Joi.object({
      name: Joi.string().required(),
      cpf: Joi.number().required(),
      office: Joi.string().required(),
      birthday: Joi.date().format('DD/MM/YYYY').max('now').required()
    });

    const { error } = await schema.validate(req.body, { abortEarl: true });

    if (error) {
      throw {
        message: 'Bad Request',
        details: error.details
      };
    }

    if (!isValidCPF(req.body.cpf)) {
      throw {
        message: 'Bad Request',
        details: 'CPF inválido'
      };
    }

    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
}