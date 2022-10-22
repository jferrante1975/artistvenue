const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.products);
router.get("/productDetail/:id", productController.detail);
router.get("/cart", productController.cart);
router.get("/search", productController.search);
router.get("/productAbm/:id", productController.abm);
router.post("/productAbm/:id", productController.abm);
router.put("/productAbm/:id", productController.abm);

module.exports = router;
