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

  users: (req, res) => {
    res.locals.title = "Users";
    res.render(path.join(__dirname, "../views/users/users.ejs"), {
      users: users,
    });
  },

  detail: (req, res) => {
    let id = req.params.id;
    let user = users.find((user) => user.id == id);
    res.locals.title = "User Edit";
    res.render(path.join(__dirname, "../views/users/detail.ejs"), {
      user,
    });
    // res.locals.title = "User Detail";
    // res.render(path.join(__dirname, "../views/users/detail.ejs"));
  },
};

module.exports = userController;
