const joi = require('./lectureJoi');
const service = require('./lectureService');
const jwt = require('jsonwebtoken');

exports.myLecture = async (req, res) => {
  const schema = joi.myLectureJoi;
  const req_body = req.body;
  const userId = req.userId;
  try {
    await schema.validateAsync(req_body);
    const result = await service.postMyLecture(userId, req_body);
    return result ? res.status(201).json({ success: true, message: '성공' }) : res.status(500).send('서버 오류');
  } catch (e) {
    console.log(`controller error \n ${e}`);
    return res.status(400).json({ success: false, message: e.message });
  }
};

exports.getMyLecture = async (req, res) => {
  const userId = req.userId;
  try {
    const result = await service.getMyLecture(userId);
    return res.status(200).send(result);
  } catch (e) {
    console.log(`controller error \n ${e}`);
    return res.status(400).json({ success: false, message: e.message });
  }
};

exports.popularLecture = async (req, res) => {
  try {
    const result = await service.getPopularLecture();
    return res.status(200).send(result);
  } catch (e) {
    console.log(`controller error \n ${e}`);
    return res.status(400).json({ success: false, message: e.message });
  }
};

exports.popularLecturer = async (req, res) => {
  try {
    const result = await service.getPopularLecturer();
    return res.status(200).send(result);
  } catch (e) {
    console.log(`controller error \n ${e}`);
    return res.status(400).json({ success: false, message: e.message });
  }
};

exports.lectureDetail = async (req, res) => {
  const lectureId = req.params.lectureId;
  try {
    const result = await service.getLectureByLectureId(lectureId);
    return res.status(200).send(result);
  } catch (e) {
    console.log(`controller error \n ${e}`);
    return res.status(400).json({ success: false, message: e.message });
  }
};

exports.lectureReview = async (req, res) => {
  const lectureId = req.params.lectureId;
  try {
    const result = await service.getLectureReview(lectureId);
    return res.status(200).send(result);
  } catch (e) {
    console.log(`controller error \n ${e}`);
    return res.status(400).json({ success: false, message: e.message });
  }
};

exports.lectureTotalReview = async (req, res) => {
  const lectureId = req.params.lectureId;
  try {
    const result = await service.getLectureTotalReview(lectureId);
    return res.status(200).send(result);
  } catch (e) {
    console.log(`controller error \n ${e}`);
    return res.status(400).json({ success: false, message: e.message });
  }
};

exports.postReview = async (req, res) => {
  const schema = joi.postReviewJoi;
  const userId = req.userId;
  const req_body = req.body;
  try {
    await schema.validateAsync(req_body);
    const result = await service.postReview(userId, req_body);
    return result ? res.status(201).json({ success: true, message: '성공' }) : res.status(500).send('서버 오류');
  } catch (e) {
    console.log(`controller error \n ${e}`);
    return res.status(400).json({ success: false, message: e.message });
  }
};

exports.searchLecture = async (req, res) => {
  const { keyword } = req.query;
  const lectureKeyword = '%' + keyword + '%';
  const lecturerKeyword = '%' + keyword + '%';
  try {
    const result = await service.searchLecture(lectureKeyword, lecturerKeyword);
    return res.status(200).send(result);
  } catch (e) {
    console.log(`controller error \n ${e}`);
    return res.status(400).json({ success: false, message: e.message });
  }
};
