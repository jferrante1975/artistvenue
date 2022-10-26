const path = require("path");
const {check, validationResult} = require('express-validator');

exports.formUser = [
  // check("image")
  // .notEmpty()
  // .withMessage("Debe seleccionar una imagen"),
  check("first_name")
    .notEmpty()
    .withMessage("Debe ingresar un nombre válido")
    .bail()
    .isLength({ min: 2 })
    .withMessage("El nombre debe tener minimo 2 caracteres"),
  check("last_name")
    .notEmpty()
    .withMessage("Debe ingresar un apellido válido")
    .bail()
    .isLength({ min: 2 })
    .withMessage("El apellido debe tener minimo 2 caracteres"),
  check("country").notEmpty().withMessage("Debe seleccionar un pais válido").bail(),
  check("rol").notEmpty().withMessage("Debe seleccionar un rol de usuario válido"),
  check("status")
    .notEmpty()
    .withMessage("Debe seleccionar un estado de usuario válido"),
  check("pws")
    .notEmpty()
    .withMessage("Debe ingresar un password válido")
    .bail()
    .isLength({ min: 8 })
    .withMessage("El password debe tener minimo 8 caracteres"),
  check("re-pws")
    .notEmpty()
    .withMessage("Debe reingresar el password"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
    // res.locals.title = "User Create Form";
    return res.render(
      path.join(__dirname, "../views/users/create-form.ejs"),
      { errors: errors.errors, old: req.body, title: 'User Create Form'});
    next();
  },
];
