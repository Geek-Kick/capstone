const router = require('express').Router();
const { auth } = require('../../middleware/auth');
const controller = require('./communityController');

router.post('/', auth, controller.post); //커뮤니티 게시글 작성
router.patch('/', auth, controller.patch); //커뮤니티 게시글 수정
router.patch('/deletion', auth, controller.delete); //커뮤니티 게시글 삭제
router.get('/', auth, controller.getPost); //커뮤니티 게시글 조회
router.get('/detail', auth, controller.getDetail); //커뮤니티 게시글 상세 조회
router.get('/detail/comment', auth, controller.getDetailComment); //커뮤니티 게시글 댓글 조회
router.get('/search', controller.getSearch); //글 검색
router.post('/comment', auth, controller.postComment); //댓글 작성
router.post('/recommend', auth, controller.recommend); //추천
router.post('/scrap', auth, controller.postScrap); // 스크랩
router.patch('/selection', auth, controller.commentSelection); // 댓글 채택
router.get('/my-post', auth, controller.getMyPost); // 내 게시글 조회

module.exports = router;
