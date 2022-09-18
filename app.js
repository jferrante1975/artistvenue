const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'))

app.get('/', (req,res) => {

    res.sendFile(path.join(__dirname, './src/views/pages/home.html'));

})

app.get('/register', (req,res) => {

    res.sendFile(path.join(__dirname, './src/views/register.html'));

})

app.get('/login', (req,res) => {

    res.sendFile(path.join(__dirname, './src/views/pages/login.html'));
})

app.get("/Template", function (req, res) {
  let htmlPath = path.resolve(__dirname, "./src/views/partials/Template.html");
  res.sendFile(htmlPath);
});

app.listen(3030, () => {
    console.log('Inicializado el servidor');
})