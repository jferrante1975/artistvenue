const { urlencoded } = require("express");
const express = require("express");
const path = require("path");
const { urlToHttpOptions } = require("url");
const cookieParser = require('cookie-parser');
const methodOverride = require("method-override");
const app = express();
const mainRoutes = require("./src/routes/mainRoutes");
const productsRoutes = require("./src/routes/productsRoutes");
const usersRoutes = require("./src/routes/usersRoutes");
const session = require("express-session");
const auth = require('./src/middlewares/auth');
const PORT = 3000;

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(cookieParser());
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "V3n3uArt15t2023",
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(auth);

app.use("/", mainRoutes);
app.use("/products", productsRoutes);
app.use("/search", productsRoutes);
app.use("/users", usersRoutes);



app.listen(PORT, () => {
  console.log(`Servidor inicializado en el puerto: ${PORT}...`);
});
