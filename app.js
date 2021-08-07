//importaçoes dos modulos
const express = require('express');
const path = require('path');
const rotasDeProdutos = require("./routes/produtos")
const rotas = require("./routes");
const paineldousuario = require('./routes/paineldousuario');
const categorias = require('./routes/categorias');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

//rotas
app.use(express.static('public'));
app.use(rotasDeProdutos);
app.use(rotas);
app.use(paineldousuario);
app.use(categorias);


app.listen(3000, ()=> console.log("server armazem digital iniciado!"));

