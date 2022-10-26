const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const multer  = require('multer')

const path = require('path');
const storage = multer.diskStorage({ destination: (req,file,cb)=> {
    cb(null, path.join(__dirname, '../../public/images/'))

},

filename: (req,file,cb) => {
    console.log(file);
    const newFilename = 'perfil_' + Date.now() + path.extname(file.originalname);
    cb(null, newFilename);
}

});

const upload = multer({ storage });

router.get("/", productController.products);
router.get("/productDetail/:id", productController.detail);
router.get("/cart", productController.cart);
router.get("/search", productController.search);
router.get("/productAbm/:id", productController.abm); 
router.post("/productAbm/:id", upload.single('uploaded_file') , productController.create);
/* router.put("/productAbm/:id", productController.abm); */

module.exports = router;
