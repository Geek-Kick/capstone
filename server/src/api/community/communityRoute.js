const router = require('express').Router();
const { auth } = require('../../middleware/auth');
const controller = require('./communityController');

router.post('/', auth, controller.post); //커뮤니티 게시글 작성
router.patch('/', auth, controller.patch); //커뮤니티 게시글 수정

module.exports = router;
