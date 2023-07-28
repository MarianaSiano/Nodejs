const express = require('express');
const app = express();
const port = 3000; //Variavel de ambiente
const path = require('path');
const basePath = __dirname;

app.get('/', (req, res) => {
    res.send('Olá Mundo!')
});

app.listen(port, () => {
    console.log(`App rodando em http://localhost:${port}`)
});