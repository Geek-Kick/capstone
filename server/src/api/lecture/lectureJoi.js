const joi = require('joi');

const lectureId = joi.number();

exports.myLectureJoi = joi.object({
  lectureId: lectureId.required(),
});
