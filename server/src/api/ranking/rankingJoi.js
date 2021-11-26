const Joi = require('joi');

exports.rankJoi = Joi.object({
    subjectId : Joi.number().required(),
});

