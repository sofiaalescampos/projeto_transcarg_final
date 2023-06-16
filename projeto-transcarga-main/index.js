const express = require("express");
const app = express();

// Estou dizendo para o Express usar o EJS como View engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index")
});

app.get("/cargas", (req, res) => {
    res.render("cargas")
})

app.get("/gerenciamento-rotas", (req, res) => {
    res.render("gerenciamento-rotas")
})

app.get("/acompanhamento", (req, res) => {
    res.render("acompanhamento")
})

app.get("/login", (req, res) => {
    res.render("login")
})

app.get("/cadastro-usuarios", (req, res) => {
    res.render("cadastro-usuarios")
})

app.get("/cadastro-caminhoes", (req, res) => {
    res.render("cadastro-caminhoes")
})

app.listen(8080, () => {
    console.log("App rodando!");
});