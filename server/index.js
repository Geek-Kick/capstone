const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

require("dotenv").config({
  path: path.resolve(
    process.cwd(),
    process.env.NODE_ENV === "production"
      ? ".env"
      : process.env.NODE_ENV === "development"
      ? ".env.dev"
      : process.env.NODE_ENV === "local"
      ? ".env.local"
      : " "
  ),
});

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 테스트용 삭제 예정
app.get("/", (req, res) => {
  res.send("우리 모두 화이팅...!");
});
// 테스트용 삭제 예정
app.get("/api/test", (req, res) => {
  res.send("통신 성공");
});

const example = require("./src/api/example/exampleRoute");
app.use("/example", example);

const port = process.env.SERVER_PORT;
app.listen(port, () =>
  console.log(
    `Server is listening on ${port} \n NODE_ENV = ${process.env.NODE_ENV}`
  )
);
