const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'))

app.get('/', (req,res) => {

    res.sendFile(path.join(__dirname, './src/views/home.html'));

})

app.get('/register', (req,res) => {

    res.sendFile(path.join(__dirname, './src/views/register.html'));

})

app.listen(3030, () => {
    console.log('Inicializado el servidor');
})