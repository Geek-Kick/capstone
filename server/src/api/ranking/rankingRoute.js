const router = require("express").Router();
const { auth } = require("../../middleware/auth");
const controller = require("./rankingController");

router.get("/subject/:subjectId", auth, controller.getLectureRank); // 과목별 유저 랭킹 조회
router.get("/top-rank/:subjectId", controller.getTotalSubRank); // 과목별 top 100 조회

module.exports = router;
