const router = require("express").Router();
const controller = require("./exampleController");

router.post("/test", controller.test);

module.exports = router;
