import Joi from 'joi';

const updateUserSchema = Joi.object({
    firstName: Joi.string().min(3).max(30).required(),
    lastName: Joi.string().min(3).max(30).required(),
    creditCard: Joi.string().creditCard().required(),
    country: Joi.string().required(),
    bio: Joi.optional(),
    birthdate: Joi.date().required(),
});

export default updateUserSchema;
