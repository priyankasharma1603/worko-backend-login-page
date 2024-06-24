const Joi = require('joi');

const validateUser = (user) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        name: Joi.string().min(3).required(),
        age: Joi.number().min(18).required(),
        city: Joi.string().required(),
        zipCode: Joi.string().pattern(new RegExp('^[0-9]{5}$')).required()
    });
    return schema.validate(user);
};

const validateId = (id) => {
    const schema = Joi.string().length(24).required(); // Assuming MongoDB ObjectId
    return schema.validate(id);
};

module.exports = { validateUser, validateId };
