const router = require("express").Router();
const { auth } = require("../../middleware/auth");
const controller = require("./userController");

router.post("/", controller.signIn);

router.post("/login", controller.login);

router.post("/logout", auth, controller.logout);

router.get("/profile", auth, controller.getProfile);

router.patch("/profile", auth, controller.updateUser);

module.exports = router;
