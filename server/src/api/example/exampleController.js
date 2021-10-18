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

exports.imageTest = async (req, res) => {
  // image 정보
  const imageInformation = req.file;

  // 콘솔 보면서 어떤 내용 오는지 확인
  // 단일 이미지 : req.file // 복수 이미지 : req.files
  console.log(imageInformation);

  if (imageInformation === undefined) {
    return res
      .status(400)
      .json({ success: false, message: "사진이 없습니다." });
  }

  // image nam
  const imageName = req.file.key;

  return res.status(200).json({ success: true });
};

// exports.getImage = async (req,res) => {
//   return res.send(https://alfy-bucket.s3.ap-northeast-2.amazonaws.com/1634551793355.heic)
// }
