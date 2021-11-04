const multer = require("multer");
const multer3 = require("multer-s3");
const aws = require("aws-sdk");

// loadfromPath? 랑 생각해보기
aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "ap-northeast-2",
});

const s3 = new aws.S3();
const upload = multer({
  storage: multer3({
    s3: s3,
    bucket: "alfy-bucket",
    acl: "public-read",
    key: function (req, file, cb) {
      cb(null, Date.now() + "." + file.originalname.split(".").pop());
    },
  }),
});

module.exports = upload;
