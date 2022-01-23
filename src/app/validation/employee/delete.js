const Joi = require('joi');

module.exports = async (req, res, next) => {  
  try {
    const { error } = await Joi.string().guid({ version: [ 'uuidv4' ]}).validate(req.params.id, { abortEarl: true });
    
    if (error) {
      const result = {
        message: 'Bad Request',
        details: 'Non-standard Id'
      }

      throw result;
    }
    
    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
}