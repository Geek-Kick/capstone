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

exports.patch = async (req, res) => {
  const schema = joi.patchJoi;
  const req_body = req.body;
  const userId = req.userId;
  try {
    await schema.validateAsync(req_body);
    const result = await service.patchPost(req_body, userId);
    return result ? res.status(201).json({ success: true, message: '성공적으로 수정' }) : res.status(500).send('서버 오류');
  } catch (e) {
    console.log(`controller error \n ${e}`);
    return res.status(400).json({ success: false, message: e.message });
  }
};

exports.delete = async (req, res) => {
  const schema = joi.deleteJoi;
  const req_body = req.body;
  const userId = req.userId;
  try {
    await schema.validateAsync(req_body);
    const result = await service.deletePost(req_body, userId);
    return result ? res.status(201).json({ success: true, message: '성공적으로 삭제' }) : res.status(500).send('서버 오류');
  } catch (e) {
    console.log(`controller error \n ${e}`);
    return res.status(400).json({ success: false, message: e.message });
  }
};

exports.getPost = async (req, res) => {
  const schema = joi.getPostJoi;
  const req_query = req.query;
  await schema.validateAsync(req_query);
  const result = await service.getPost(req_query);
  return res.status(200).send(result);
};

exports.getDetail = async (req, res) => {
  const schema = joi.getDetailJoi;
  const req_query = req.query;
  const userId = req.userId;
  await schema.validateAsync(req_query);
  const result = await service.getDetail(req_query, userId);
  return res.status(200).send(result);
};

exports.getDetailComment = async (req, res) => {
  const schema = joi.getDetailJoi;
  const req_query = req.query;
  await schema.validateAsync(req_query);
  const result = await service.getDetailComment(req_query);
  return res.status(200).send(result);
};

exports.getSearch = async (req, res) => {
  const schema = joi.getSearchJoi;
  const req_query = req.query;
  await schema.validateAsync(req_query);
  const result = await service.getSearch(req_query);
  return res.status(200).send(result);
};

exports.postComment = async (req, res) => {
  const schema = joi.postCommentJoi;
  const userId = req.userId;
  const req_body = req.body;
  const image_body = req.body;
  try {
    await schema.validateAsync(req_body);
    const result = await service.postComment(userId, req_body, image_body);
    return result ? res.status(201).json({ success: true, message: '성공적으로 게시' }) : res.status(500).send('서버 오류');
  } catch (e) {
    console.log(`controller error \n ${e}`);
    return res.status(400).json({ success: false, message: e.message });
  }
};
