const joi = require("./userJoi");
const service = require("./userService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signIn = async (req, res) => {
  const schema = joi.signInJoi;
  const req_body = req.body;

  try {
    await schema.validateAsync(req_body);
    // 중복 검사
    const duplicateTest = await service.duplicateTest(req_body);
    if (!duplicateTest || duplicateTest === null) {
      return res.status(400).json({
        success: false,
        message: "email, nickName, phone중 하나가 중복되었습니다.",
      });
    }

    const result = await service.signIn(req_body);
    return result
      ? res.status(201).json({ success: true, message: "회원가입 성공" })
      : res.status(500).json({ success: false, message: "서버 에러 발생" });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ success: false, message: e.message });
  }
};

exports.login = async (req, res) => {
  const schema = joi.loginJoi;
  const req_body = req.body;

  try {
    await schema.validateAsync(req_body);

    const result = await service.login(req_body);
    if (result === "noEmail") {
      return res.status(400).json({
        success: false,
        message: "입력하신 이메일과 일치하는 회원 정보가 없습니다.",
      });
    } else if (result === "wrongPassword") {
      return res
        .status(400)
        .json({ success: false, message: "비밀번호가 일치하지 않습니다." });
    } else {
      const { accessToken, refreshToken } = result;
      res.cookie("accessToken", accessToken);
      res.cookie("refreshToken", refreshToken);
      return res.status(200).json({ success: true, message: "로그인 성공!" });
    }
  } catch (e) {
    console.log(`Controller Error\n ${e}`);
    return res.status(400).json({ success: false, message: e.message });
  }
};

exports.logout = (req, res) => {
  return res
    .status(200)
    .cookie("accessToken", null)
    .cookie("refreshToken", null)
    .json({ success: true, message: "로그아웃 성공" });
};
