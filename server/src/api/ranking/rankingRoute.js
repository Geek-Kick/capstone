const router = require("express").Router();
const { auth } = require("../../middleware/auth");
const controller = require("./rankingController");

/*
TODO: 
학교 종합 랭킹 조회 유저 auth 포함 시키기

*/

router.get("/subject/:subjectId", auth, controller.getLectureRank); // 과목별 유저 랭킹 조회
router.get("/top-rank/:subjectId", controller.getTotalSubRank); // 과목별 top 100 조회
router.get("/" , controller.getAllSubTopHundredRank); // 종합 등수 조회 API
router.get("/schoolRanking/:subjectId", controller.getSchoolRankBySubject); // 과목별 학교 랭킹 조회 API
router.get("/schoolRanking", auth, controller.getSchoolRank); // 학교 종합 랭킹 조회 API 

module.exports = router;
