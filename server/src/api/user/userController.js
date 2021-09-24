const joi = require("./userJoi");
const service = require("./userService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signIn = async (req, res) => {
  const schema = joi.signInJoi;
  const req_body = req.body;

  try {
    await schema.validateAsync(req_body);
    const { email, nickName, password, phone, emailAdv, smsAdv } = req_body;
    // 중복 검사
    const duplicateTestInfo = [email, nickName, phone];
    const duplicateTest = await service.duplicateTest(duplicateTestInfo);
    if (!duplicateTest || duplicateTest === null) {
      return res.status(400).json({
        success: false,
        message: "email, nickName, phone중 하나가 중복되었습니다.",
      });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const signInInfo = [
      email,
      nickName,
      hashedPassword,
      phone,
      emailAdv,
      smsAdv,
    ];
    const result = await service.signIn(signInInfo);
    return result
      ? res.status(201).json({ success: true, message: "회원가입 성공" })
      : res
          .status(400)
          .json({ success: false, message: "최승용에게 문의하시오" });
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
    const { email, password } = req_body;

    // 이메일 확인
    const user = await service.getUserByEmail(email);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "입력하신 아이디에 해당하는 회원정보가 없습니다.",
      });
    }

    // 비밀번호 확인
    const userPassword = user.password;
    const compare = bcrypt.compareSync(password, userPassword);
    if (!compare) {
      return res
        .status(400)
        .json({ success: false, message: "비밀번호가 잘못 되었습니다." });
    }

    const accessToken = jwt.sign(
      {
        userId: user.id,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }
    );
    const refreshToken = jwt.sign(
      {
        userId: user.id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }
    );
    res.cookie("accessToken", accessToken);
    res.cookie("refreshToken", refreshToken);
    return res.status(200).json({ success: true, message: "로그인 성공!" });
  } catch (e) {
    console.log(`Controller Error\n ${e}`);
    return res.status(400).json({ success: false, message: e.message });
  }
};
