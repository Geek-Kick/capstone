const joi = require('joi');

const title = joi.string().max(20);
const category = joi.string();
const contents = joi.string();

exports.postJoi = joi.object({
  title: title.required(),
  category: category.required(),
  contents: contents.required(),
});
