const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.users);
// router.get("/userDetail", productController.detail);


module.exports = router;