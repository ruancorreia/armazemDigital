//importaçoes dos modulos
const express = require('express');
const rotasDeProdutos = require("./routes/produtos")
const rotas = require("./routes");

const app = express();

//rotas
app.use(express.static('public'));
app.use(rotasDeProdutos);
app.use(rotas);


app.listen(3000, ()=> console.log("Servidor iniciado!"));

