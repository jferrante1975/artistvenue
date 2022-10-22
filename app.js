const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const app = express();
const mainRoutes = require("./src/routes/mainRoutes");
const productsRoutes = require("./src/routes/productsRoutes");
const usersRoutes = require("./src/routes/usersRoutes");
const session = require("express-session");
const PORT = 3000;

app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(methodOverride("_method"));
app.use("/", mainRoutes);
app.use("/products", productsRoutes);
app.use("/search", productsRoutes);
app.use("/users", usersRoutes);

app.use(
  session({
    secret: "V3n3uArt15t2022",
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.listen(PORT, () => {
  console.log(`Servidor inicializado en el puerto: ${PORT}...`);
});
