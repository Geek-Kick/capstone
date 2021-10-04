const joi = require("./exampleJoi");

exports.test = async (req, res) => {
  // const schema = joi.joiExample;
  // try {
  //   await schema.validateAsync(req.body);
  //   return res.status(200).json({ success: true, message: "성공!" });
  // } catch (e) {
  //   return res.status(400).json({ success: false, message: e.message });
  // }
  console.log(req.body);
  return res
    .status(200)
    .json({ success: true, message: "테스트 성공", data: req.body });
};
