const path = require("path");

const userController = {
  users: (req, res) => {
    res.render(path.join(__dirname, "../views/users/users.ejs"));
  },
};

module.exports = userController;