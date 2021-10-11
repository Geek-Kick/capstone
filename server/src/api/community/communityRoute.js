const router = require('express').Router();
const { auth } = require('../../middleware/auth');
const controller = require('./communityController');

router.post('/', auth, controller.post); //커뮤니티 게시글 작성
router.patch('/', auth, controller.patch); //커뮤니티 게시글 수정
router.patch('/deletion', auth, controller.delete); //커뮤니티 게시글 삭제
router.get('/', auth, controller.getPost); //커뮤니티 게시글 조회
router.get('/detail', auth, controller.getDetail); //커뮤니티 게시글 상세 조회
router.get('/detail/comment', auth, controller.getDetailComment); //커뮤니티 게시글 댓글 조회

module.exports = router;
