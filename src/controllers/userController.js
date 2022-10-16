const path = require("path");
const fs = require("fs");

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const userController = {
  login: (req, res) => {
    res.locals.title = "Login";
    res.render(path.join(__dirname, "../views/users/login.ejs"));
  },

  register: (req, res) => {
    res.locals.title = "Register";
    res.render(path.join(__dirname, "../views/users/register.ejs"));
  },

  //All users
  users: (req, res) => {
    res.locals.title = "Users";
    res.render(path.join(__dirname, "../views/users/users.ejs"), {
      users: users,
    });
  },

  // Detail view
  detail: (req, res) => {
    let id = req.params.id;
    let user = users.find((user) => user.id == id);
    res.locals.title = "User Detail";
    res.render(path.join(__dirname, "../views/users/detail.ejs"), {
      user,
    });
  },

  // Update
  edit: (req, res) => {
    let id = req.params.id;
    let user = users.find((user) => user.id == id);
    res.locals.title = "User Edit";
    res.render(path.join(__dirname, "../views/users/edit.ejs"), {
      user,
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
    res.redirect("/");
  },
};

module.exports = userController;
