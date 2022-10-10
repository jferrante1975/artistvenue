const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/users/login", userController.login);
router.get("/", userController.users);
// router.get("/userDetail", userController.detail);


module.exports = router;