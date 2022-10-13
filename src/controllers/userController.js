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
};

module.exports = userController;
