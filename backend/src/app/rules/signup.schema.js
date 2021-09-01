const Joi = require('joi');

const signupSchema = Joi.object({
    firstName: Joi.string().min(3).max(30).required(),
    lastName: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    creditCard: Joi.string().creditCard().required(),
    country: Joi.string().required(),
    bio: Joi.optional(),
    birthdate: Joi.date().required(),
});

export default signupSchema;
