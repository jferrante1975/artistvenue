const path = require("path");
const fs = require("fs");
const { validationResult } = require("express-validator");

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const userController = {
  register: (req, res) => {
    res.render(path.join(__dirname, "../views/users/register.ejs"), {
      title: "Register",
    });
  },
  login: (req, res) => {
    res.render(path.join(__dirname, "../views/users/login.ejs"), {
      title: "Login",
    });
  },
  authenticate: (req, res) => {
    //PRIMERO Q TODO HACEMOS LOGICA PARA GUARDAR LOS DATOS DEL LOGIN EN UN JSON
    const { email, password } = req.body;

    //verifico si el mail q puso en el formulario esta en nuestra db
    let user = users.find((user) => user.email == email);

    if (user) {
      // y la contraseña es correcta...
      if (bcrypt.compareSync(password, user.password)) {
        // Eliminamos los datos sensibles y guardamos el usuario en sesión
        delete user.password;

        req.session.user = user;

        // Si pidió que lo recordemos
        if (req.body.remember) {
          // Generamos un token seguro, eso para que no pueda entrar cualquiera
          // https://stackoverflow.com/questions/8855687/secure-random-token-in-node-js
          const token = crypto.randomBytes(64).toString("base64");
          user.token = token;
          // Lo guardamos en base, para poder chequearlo luego

          let userLoginInfo = [...usersLoginInfo, user];
          fs.writeFileSync(
            userLoginInfoFilePath,
            JSON.stringify(userLoginInfo, null, " ")
          );

          // Recordamos al usuario por 3 meses         msegs  segs  mins  hs   días
          res.cookie("rememberToken", token, {
            maxAge: 1000 * 60 * 60 * 24 * 90,
          });
        }

        // Finalmente lo mandamos a la home
        return res.redirect("/");
      } else {
        // Si la contraseña esta mal
        return res.render("login", {
          old: req.body,
          errors: {
            email: "la contraseña son inválidos",
          },
        });
      }
    } else {
      // Si el email no existe
      return res.render("login", {
        old: req.body,
        errors: {
          email: "El email o la contraseña son inválidos",
        },
      });
    }
  },
  profile: (req, res) => {
    res.render("profile");
  },
  logout: (req, res) => {
    // Borramos el registro de la base de datos si existe
    const token = usersLoginInfo.find(
      (user) => (user.token = req.cookies.rememberToken)
    );
    if (token) {
      let logerDeleter = usersLoginInfo.filter(
        (user) => user.token != req.cookies.rememberToken
      );
      fs.writeFileSync(
        userLoginInfoFilePath,
        JSON.stringify(logerDeleter, null, " ")
      );
    }
    // Destruimos la sesión
    req.session.destroy();

    // Destruimos la cookie de recordar
    res.clearCookie("rememberToken");

    // Redirigimos a la home
    res.redirect("/");
  },

  //All users
  users: (req, res) => {
    res.render(path.join(__dirname, "../views/users/users.ejs"), {
      users: users,
      title: "Users",
    });
  },

  // Detail view
  detail: (req, res) => {
    let id = req.params.id;
    let user = users.find((user) => user.id == id);
    res.render(path.join(__dirname, "../views/users/detail.ejs"), {
      user,
      title: "User Detail",
    });
  },

  // Create - Form
  create: (req, res) => {
    res.locals.title = "User Create Form";
    res.render(path.join(__dirname, "../views/users/create-form.ejs"), {
      title: "User Create Form",
    });
  },

  // Create -  Store Method
  store: (req, res) => {
    let image;
    console.log(req.files);
    if (req.files[0] != undefined) {
      image = req.files[0].filename;
    } else {
      image = "default.webp";
    }
    let newUser = {
      id: users[users.length - 1].id + 1,
      ...req.body,
      image: image,
    };
    users.push(newUser);
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
    res.redirect("/users");
  },

  // Update Form
  edit: (req, res) => {
    let id = req.params.id;
    let userToEdit = users.find((user) => user.id == id);
    res.locals.title = "User Edit Form";
    res.render(path.join(__dirname, "../views/users/edit-form.ejs"), {
      userToEdit,
    });
  },

  // Update Method
  update: (req, res) => {
    let id = req.params.id;

    let userToEdit = users.find((user) => user.id == id);
    let image;

    if (req.files[0] != undefined) {
      image = req.files[0].filename;
    } else {
      image = userToEdit.image;
    }

    userToEdit = {
      id: userToEdit.id,
      ...req.body,
      image: image,
    };

    let newUsers = users.map((user) => {
      if (user.id == userToEdit.id) {
        return (user = { ...userToEdit });
      }
      return user;
    });

    fs.writeFileSync(usersFilePath, JSON.stringify(newUsers, null, " "));
    res.redirect("/users");
  },

  // Delete
  destroy: (req, res) => {
    console.log(req.params.id);
    let id = req.params.id;
    let finalUsers = users.filter((user) => user.id != id);
    fs.writeFileSync(usersFilePath, JSON.stringify(finalUsers, null, " "));
    res.redirect("/users");
  },
};

module.exports = userController;
