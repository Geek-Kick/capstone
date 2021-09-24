const router = require("express").Router();
const controller = require("./userController");

router.post("/", controller.signIn);

router.post("/login", controller.login);

module.exports = router;
