const router = require("express").Router();
const controller = require("./exampleController");
// image 처리
const upload = require("../../../config/upload");

router.post("/test", controller.test);

router.post("/image", upload.single("img"), controller.imageTest);

module.exports = router;
