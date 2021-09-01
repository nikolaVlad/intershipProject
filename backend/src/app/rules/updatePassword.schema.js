const Joi = require('joi');

const updatePasswordSchema = Joi.object({
    password: Joi.string().min(6).required(),
    newPassword : Joi.string().min(6).required()
});

export default updatePasswordSchema;