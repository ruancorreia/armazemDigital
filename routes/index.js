const express = require("express");
const routes = express.Router();
const path = require("path");


routes.get('/', (req, res)=>{
    res.render('index');
});
routes.get('/home', (req, res)=>{
    res.redirect('/');
});
routes.get('/manutencao', (req, res)=>{
    res.render('manutencao');
});
routes.get('/paineldousuario', (req, res)=>{
    res.render('paineldousuario');
});
routes.get('/carrinho', (req, res)=>{
    res.render('carrinho');
});

routes.get('/produtos', (req, res)=>{
    res.render('produtos');
});

routes.get('/categorias', (req, res)=>{
    res.render('categorias');
});

module.exports = routes;