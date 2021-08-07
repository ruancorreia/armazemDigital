const express = require("express");
const routes = express.Router();

routes.get("/paineldousuario", (req, res) =>{
    res.send("pagina do usuario")
});

routes.get("/paineldousuario/:nome", (req, res) =>{  
    const id = (req.params.nome);              
    res.send("bem vindo! "+ id)
});


module.exports = routes;