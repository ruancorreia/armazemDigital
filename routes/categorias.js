const express = require("express");
const routes = express.Router();

routes.get("/categorias", (req, res) =>{
    res.send("Categoria de Produtos")
});

routes.get("/categorias/:nome?", (req, res) =>{  // (:nome) rota parametrizada de pesquisa de termo digitado
    const id = (req.params.nome);              //como se fosse uma variavel que recebe o dado digitado
    res.send("Resultado da sua pesquisa:  " + id)
});


module.exports = routes;