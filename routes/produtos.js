const express = require("express");
const routes = express.Router();

routes.get("/produtos/lista", (req, res) =>{
    res.send("pagina de produtos")
});

routes.get("/produto/:nome", (req, res) =>{  // (:nome) rota parametrizada de pesquisa de termo digitado
    console.log(req.params.nome);              //como se fosse uma variavel que recebe o dado digitado
    res.send("pagina de produtos")
});

module.exports = routes;