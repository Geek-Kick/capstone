const router = require("express").Router();
const controller = require("./exampleController");

router.get("/test", controller.test);

module.exports = router;
