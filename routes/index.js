const express = require("express");
const routes = express.Router();
const path = require("path");


routes.get('/', (req, res)=>{
    res.sendFile(path.resolve("views", "index.html"));
});
routes.get('/home', (req, res)=>{
    res.sendFile(path.resolve("views", "index.html"));
});
routes.get('/manutencao', (req, res)=>{
    res.sendFile(path.resolve("views", "manutencao.html"));
});
routes.get('/paineldousuario', (req, res)=>{
    res.sendFile(path.resolve("views", "paineldousuario.html"));
});
routes.get('/carrinho', (req, res)=>{
    res.sendFile(path.resolve("views", "carrinho.html"));
});

routes.get('/produtos', (req, res)=>{
    res.sendFile(path.resolve("views", "produtos.html"));
});

module.exports = routes;