const Joi = require('joi');

module.exports = async (req, res, next) => {  
  try {
    const schema = Joi.object({
      name: Joi.string().required(),
      category: Joi.string().required(),
      price: Joi.number().required(),
      employee_id: Joi.string().guid({ version: [ 'uuidv4' ]}).required()
    });

    const { error } = await schema.validate(req.body, { abortEarl: true });
    
    if (error) {
      const result = {
        message: 'Bad Request',
        details: error.details
      }

      throw result;
    }
    
    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
}