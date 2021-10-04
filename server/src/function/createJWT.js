const jwt = require("jsonwebtoken");

const createJWT = async (userId) => {
  const accessToken = jwt.sign(
    {
      userId: userId,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_TIME,
    }
  );
  const refreshToken = jwt.sign(
    {
      userId: userId,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_TIME,
    }
  );
  const returnToken = { accessToken, refreshToken };
  return returnToken;
};

module.exports = createJWT;
