const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/login", userController.login);
router.get("/register", userController.register);
router.get("/", userController.users);
router.get("/detail", userController.detail);


module.exports = router;