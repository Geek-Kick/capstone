const joi = require('./communityJoi');
const service = require('./communityService');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.post = async (req, res) => {
  const schema = joi.postJoi;
  const req_body = req.body;
  const imageUrl_body = req.body;
  const userId = req.userId;
  try {
    await schema.validateAsync(req_body);
    const result = await service.postPost(req_body, userId, imageUrl_body);
    return result ? res.status(201).json({ success: true, message: '성공적으로 게시' }) : res.status(500).send('서버 오류');
  } catch (e) {
    console.log(`controller error \n ${e}`);
    return res.status(400).json({ success: false, message: e.message });
  }
};
