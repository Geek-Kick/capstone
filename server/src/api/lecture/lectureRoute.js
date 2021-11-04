const router = require('express').Router();
const { auth } = require('../../middleware/auth');
const controller = require('./lectureController');

router.post('/', auth, controller.myLecture); // 내 강의 추가

module.exports = router;
