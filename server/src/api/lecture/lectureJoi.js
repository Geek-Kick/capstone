const joi = require('joi');

const lectureId = joi.number();
const star = joi.number();
const contents = joi.string();
const grade = joi.number();

exports.myLectureJoi = joi.object({
  lectureId: lectureId.required(),
  grade: grade.required(),
});

exports.postReviewJoi = joi.object({
  lectureId: lectureId.required(),
  star: star.required(),
  contents: contents.required(),
});
