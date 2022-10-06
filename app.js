const express = require("express");
const path = require("path");
const app = express();
const mainRoutes = require("./src/routes/mainRoutes");
const PORT = 3000;

app.use(express.static(path.join(__dirname, '/public')));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "/public")));

app.use("/", mainRoutes);

app.listen(PORT, () => {
  console.log(`Servidor inicializado en el puerto: ${PORT}...`);
});
