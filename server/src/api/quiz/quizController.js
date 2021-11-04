const service = require("./quizService");

exports.getAllQuiz = async (req, res) => {
  const result = await service.getAllQuiz();

  return result
    ? res.status(200).send(result)
    : res.status(500).json({ success: false, message: "서버 에러" });
};
