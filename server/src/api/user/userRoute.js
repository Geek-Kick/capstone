const router = require("express").Router();
const { auth } = require("../../middleware/auth");
const controller = require("./userController");
const upload = require("../../../config/upload");

router.post("/", controller.signIn);

router.post("/login", controller.login);

router.post("/logout", auth, controller.logout);

router.get("/profile", auth, controller.getProfile);

router.patch("/profile", auth, controller.updateUser);

router.patch("/image", auth, upload.single("img"), controller.updateImage);

router.get("/image", auth, controller.getUserImage);
module.exports = router;
