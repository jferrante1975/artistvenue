const path = require("path");
const fs = require("fs");
const { validationResult } = require("express-validator");

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const userController = {
  login: (req, res) => {
    res.render(path.join(__dirname, "../views/users/login.ejs"), { title:  "Login" });
  },

  register: (req, res) => {
    res.render(path.join(__dirname, "../views/users/register.ejs"), { title:  "Register" });
  },

  //All users
  users: (req, res) => {
    res.render(path.join(__dirname, "../views/users/users.ejs"), {
      users: users, title:  "Users"
    });
  },

  // Detail view
  detail: (req, res) => {
    let id = req.params.id;
    let user = users.find((user) => user.id == id);
    res.render(path.join(__dirname, "../views/users/detail.ejs"), {
      user, title:  "User Detail"
    });
  },

  // Create - Form
  create: (req, res) => {
    res.locals.title = "User Create Form";
    res.render(path.join(__dirname, "../views/users/create-form.ejs"), { title:  "User Create Form" });
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
