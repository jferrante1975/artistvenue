const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/login", userController.login);
router.get("/register", userController.register);
router.post("/register", userController.registerCreate);
router.get("/", userController.users);
// router.get("/userDetail", userController.detail);


module.exports = router;