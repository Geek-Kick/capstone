const joi = require('joi');

const title = joi.string().max(20);
const category = joi.string();
const contents = joi.string();
const id = joi.number();
const sort = joi.string();
const postId = joi.number();

exports.postJoi = joi.object({
  title: title.required(),
  category: category.required(),
  contents: contents.required(),
});

exports.patchJoi = joi.object({
  id: id.required(),
  contents: contents.required(),
});

exports.deleteJoi = joi.object({
  id: id.required(),
});

exports.getPostJoi = joi.object({
  category: category.required(),
  sort: sort.required(),
});

exports.getDetailJoi = joi.object({
  postId: postId.required(),
});
