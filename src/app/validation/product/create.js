const Joi = require('joi');

module.exports = async (req, res, next) => {  
  try {
    const schema = Joi.object({
      name: Joi.string().required(),
      category: Joi.number(),
      price: Joi.string().required(),
      employee_id: Joi.string().required()
    });

    const { error } = await schema.validate(req.body, { abortEarl: true });
    console.log("validation")
    console.log(req.body)
    
    if (error) {
        throw error;
    }

    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
}