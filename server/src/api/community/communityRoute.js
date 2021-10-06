const router = require('express').Router();
const { auth } = require('../../middleware/auth');
const controller = require('./communityController');

router.post('/post', auth, controller.post);

module.exports = router;
