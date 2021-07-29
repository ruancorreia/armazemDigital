//importaçoes dos modulos
const express = require('express');
const app = express();

//rotas
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/views/index.html")
});

app.get('/home', (req, res)=>{
    res.sendFile(__dirname + "/views/index.html")
});

app.get('/manutencao', (req, res)=>{
    res.sendFile(__dirname + "/views/manutencao.html")
});

app.get('/paineldousuario', (req, res)=>{
    res.sendFile(__dirname + "/views/paineldousuario.html")
});

app.get('/carrinho', (req, res)=>{
    res.sendFile(__dirname + "/views/carrinho.html")
});



app.listen(3000, ()=> console.log("Servidor iniciado!"));

app.post