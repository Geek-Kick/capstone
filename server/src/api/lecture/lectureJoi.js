const joi = require('joi');

const lectureId = joi.number();
<<<<<<< HEAD
=======
const star = joi.number();
const contents = joi.string();
>>>>>>> main

exports.myLectureJoi = joi.object({
  lectureId: lectureId.required(),
});
<<<<<<< HEAD
=======

exports.postReviewJoi = joi.object({
  lectureId: lectureId.required(),
  star: star.required(),
  contents: contents.required(),
});
>>>>>>> main
