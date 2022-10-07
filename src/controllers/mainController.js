const path = require("path");

const mainController = {
  home: (req, res) => {
    res.render(path.join(__dirname, "../views/home.ejs"));
  },
};

module.exports = mainController;
