const router = require("express").Router();
const controller = require("./quizController");

router.get("/", controller.getAllQuiz);

module.exports = router;
