const joi = require("joi");

exports.joiExample = joi.object({
  name: joi.string().min(1).max(15).exist(),
  year: joi.number().min(10).max(30).exist(),
});
