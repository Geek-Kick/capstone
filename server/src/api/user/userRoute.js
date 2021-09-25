const router = require("express").Router();
const { auth } = require("../../middleware/auth");
const controller = require("./userController");

router.post("/", controller.signIn);

router.post("/login", controller.login);

router.post("/logout", auth, (req, res) => {
  res.send("logout");
});

module.exports = router;
