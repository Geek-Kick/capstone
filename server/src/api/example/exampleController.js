const joi = require("./exampleJoi");

exports.test = async (req, res) => {
  // const schema = joi.joiExample;
  // try {
  //   await schema.validateAsync(req.body);
  //   return res.status(200).json({ success: true, message: "성공!" });
  // } catch (e) {
  //   return res.status(400).json({ success: false, message: e.message });
  // }
  console.log(req.body.name);
  return res
    .status(200)
    .json({ success: true, message: "테스트 성공", data: req.body });
};

exports.imageTest = async (req, res) => {
  // image 정보
  const imageInformation = req.file;

  // 파일이 아닌경우 req.body에 존재
  console.log(req.body);
  console.log(req.body.name);

  // 콘솔 보면서 어떤 내용 오는지 확인
  // 단일 이미지 : req.file // 복수 이미지 : req.files
  console.log(imageInformation);

  if (imageInformation === undefined) {
    return res
      .status(400)
      .json({ success: false, message: "사진이 없습니다." });
  }

  // image name
  // 이걸 디비에 넣어주면 됨
  // https://alfy-bucket.s3.ap-northeast-2.amazonaws.com/ 뒤에
  // imageName 넣어주면 사진 가져오기 가능
  const imageName = req.file.key;

  return res.status(200).json({ success: true });
};
