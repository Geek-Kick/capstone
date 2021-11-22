const service = require("./rankingService");
const joi = require("./rankingJoi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { isSchema } = require("joi");

/**
 * API Name : 과목별 랭킹 조회 API
 * [GET] /ranking/:subjectId
 * path vairable : subjectId
 */
exports.getLectureRank = async (req, res) => {
  const schema = joi.rankJoi;
  const subjectId = req.params.subjectId;
  const userId = req.userId;
  try {
    const value = await schema.validateAsync({ subjectId: subjectId });
    const result = await service.getRank(subjectId, userId);
    return res.status(200).send(result);
  } catch (err) {
    if (err.joi) {
      assert(`controller error\n ${err}`);
      return err.status(400).json({ success: false, message: err.message });
    }
  }
};

/**
 * API Name : 과목별 top 100 조회 API
 * [GET] /top-rank/:subjectId
 * path vairable : subjectId
 */
exports.getTotalSubRank = async (req, res) => {
  const schema = joi.rankJoi;
  const subjectId = req.params.subjectId;
  try {
    const value = await schema.validateAsync({ subjectId: subjectId });
    const result = await service.getAllSubRank(subjectId);
    return res.status(200).send(result);
  } catch (err) {
    if (err.joi) {
      assert(`controller error\n ${err}`);
      return err.status(400).json({ success: false, message: err.message });
    }
  }
};

/**
 * API Name : 종합 등수 조회 API
 * [GET] /
 */
exports.getAllSubTopHundredRank = async (req, res) => {
  try {
    const result = await service.getTopHundredRanking();
    return res.status(200).send(result);
  } catch (err) {
    if (err.joi) {
      assert(`controller error\n ${err}`);
      return err.status(400).json({success: false, message: err.message});
    }
  }
};

/**
 * API Name : 종합 등수 조회 API
 * [GET] /
 */
 exports.getAllSubTopHundredRank = async (req, res) => {
  try {
    const result = await service.getTopHundredRanking();
    return res.status(200).send(result);
  } catch (err) {
    if (err.joi) {
      assert(`controller error\n ${err}`);
      return err.status(400).json({success: false, message: err.message});
    }
  }
};

/**
 * API Name : 과목별 학교 랭킹 조회 API
 * [GET] /shoolRanking/:subjectId
 */
 exports.getSchoolRankBySubject = async (req, res) => {
  const schema = joi.rankJoi;
  const subjectId = req.params.subjectId;
  try {
    const value = await schema.validateAsync({ subjectId: subjectId });
    const result = await service.getSchoolRankSubject(subjectId);
    return res.status(200).send(result);
  } catch (err) {
    if (err.joi) {
      assert(`controller error\n ${err}`);
      return err.status(400).json({success: false, message: err.message});
    }
  }
};