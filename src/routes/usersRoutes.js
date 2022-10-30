const express = require("express");
const router = express.Router();
const multer = require('multer');
const { check } = require("express-validator");
const validator = require('../middlewares/validator')
const guestRoute = require('../middlewares/guestRoute');
const userRoute = require('../middlewares/userRoute');
const userController = require("../controllers/userController");

// ************ Multer ************ 
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/images/profile')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + '.'+file.mimetype.split('/').reverse()[0])
    }
})
var upload = multer({storage: storage})


//Mostramos el formulario de login
router.get('/login',guestRoute,userController.login)
//hacer el post de formulario de login
router.post('/login',guestRoute,userController.authenticate)

//logout
router.post('/logout',userRoute,userController.logout)

router.get('/profile', userRoute, userController.profile);

router.get("/", userController.users);
router.get("/detail/:id", userController.detail);

router.get('/create', userController.create); 
router.post('/', upload.any(), validator.formUser, userController.store); 

router.get("/edit/:id", userController.edit);
router.patch('/edit/:id', upload.any(), validator.formUser, userController.update);

router.delete('/delete/:id', userController.destroy); 

module.exports = router;