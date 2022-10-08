const express = require("express");
const path = require("path");
const app = express();
const mainRoutes = require("./src/routes/mainRoutes");
const productsRoutes = require("./src/routes/productsRoutes");
const PORT = 3000;

app.use(express.static(path.join(__dirname, '/public')));
app.set("view engine", "ejs");
app.set('views',path.join(__dirname,'views'));

app.use("/", mainRoutes);
app.use("/products", productsRoutes);

app.listen(PORT, () => {
  console.log(`Servidor inicializado en el puerto: ${PORT}...`);
});
