const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.products);
router.get("/productDetail/:id", productController.detail);
router.get("/shoppingCart", productController.cart);

module.exports = router;
