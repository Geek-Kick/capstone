const Joi = require('joi');

exports.rankJoi = Joi.object({
    subjectId : Joi.number().required(),
    userId : Joi.required(),
});

