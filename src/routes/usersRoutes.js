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

//Mostrar el formulario para hacer el regsitro
router.get('/register',guestRoute,userController.register)

//hacer post del formulario de registro
router.post('/',guestRoute, upload.any(), validator.formUser, userController.store)

//Mostramos el formulario de login
router.get('/login',userController.login)
//hacer el post de formulario de login
router.post('/login',userController.authenticate)

router.get('/reset',userController.reset)

//logout
router.post('/logout',userRoute,userController.logout)

router.get('/profile', userRoute, userController.profile);

router.get("/", userRoute,userController.users);
router.get("/detail/:id", userRoute,userController.detail);

router.get('/create', userRoute,userController.create); 
router.post('/', userRoute, upload.any(), validator.formUser, userController.store); 

router.get("/edit/:id", userRoute,userController.edit);
router.patch('/edit/:id', userRoute,upload.any(), validator.formUser, userController.update);

router.delete('/delete/:id', userRoute,userController.destroy); 

module.exports = router;