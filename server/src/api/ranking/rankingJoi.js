const joi = require('joi');

exports.rankJoi = joi.object({
    subjectId : joi.number().required(),
});

