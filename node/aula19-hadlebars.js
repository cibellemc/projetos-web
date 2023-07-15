const express = require("express") 
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize');

// config - quero usar o handlebars como template engine
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'})) // main é o template padrão da aplicação
app.set('view engine', 'handlebars')

// config - banco de dados
const sequelize = new Sequelize('curso-node', 'postgres', '01111971', {
  dialect: 'postgres',
  host: 'localhost'
});

// rotas
app.get('/cad', function(req, res){
    res.render('formulario.handlebars')
})

app.listen(8081, function(){ 
	console.log("Servidor rodando")
})