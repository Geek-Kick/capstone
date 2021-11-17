const router = require('express').Router();
const { auth } = require('../../middleware/auth');
const controller = require('./lectureController');

router.post('/', auth, controller.myLecture); // 내 강의 추가
router.get('/my-lecture', auth, controller.getMyLecture); // 내 강의 조회
router.get('/popular', controller.popularLecture); // 인기 강의 조회
router.get('/popular-lecturer', controller.popularLecturer); // 인기 강사 조회
router.get('/id/:lectureId', controller.lectureDetail); // 강의 상세 조회
router.get('/id/:lectureId/review', controller.lectureReview); // 강의평 조회
router.get('/id/:lectureId/total-review', controller.lectureTotalReview); // 강의평 더보기 조회
router.post('/review', auth, controller.postReview); // 강의평 작성
router.get('/search', controller.searchLecture); // 강의 검색
module.exports = router;
