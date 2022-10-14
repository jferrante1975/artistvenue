const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.products);
router.get("/productDetail/:id", productController.detail);
<<<<<<< HEAD
router.get("/shoppingCart", productController.cart);
=======
router.get("/cart", productController.cart);
router.get("/search", productController.search);
>>>>>>> aefbc00303d6e237df4bc24097c5fcc55db60f3a

module.exports = router;
