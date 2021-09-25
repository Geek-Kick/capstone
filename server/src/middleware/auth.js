const jwt = require("jsonwebtoken");
const createJWT = require("../function/createJWT");

exports.auth = async (req, res, next) => {
  const accessToken = req.cookies.accessToken;
  const refreshToken = req.cookies.refreshToken;

  try {
    // accessToken validation
    const result = await jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET
    );
    req.userId = result.userId;
    next();
  } catch (e) {
    // refreshToken validation
    console.log("어세스 토큰 만료");
    const result = await validateRefreshToken(refreshToken);
    if (result === null) {
      return res
        .status(404)
        .json({ success: false, message: "로그인이 만료되었습니다." });
    }
    console.log("access, refresh 재발급");
    const newAccess = result.accessToken;
    const newRefresh = result.refreshToken;
    res.cookie("accessToken", newAccess);
    res.cookie("refreshToken", newRefresh);
    next();
  }
};

const validateRefreshToken = async (token) => {
  try {
    const result = await jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
    return createJWT(result.userId);
  } catch (e) {
    console.log("리프레시 토큰 만료");
    return null;
  }
};
