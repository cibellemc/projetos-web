import express from "express";
const app = express();
import handlebars from 'express-handlebars';
import bodyParser from 'body-parser';
import { Post } from "./models/Post.js";

// config - quero usar o handlebars como template engine
app.engine('handlebars',handlebars.engine({defautLayout: 'main',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
}}))
app.set('view engine', 'handlebars')

// config - body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// rotas

app.get('/', (req, res) => {
  Post.findAll({order: [['id', 'DESC']]}).then(posts => {
    res.render('home', { posts });
  });
});

app.get('/cad', function(req, res){
  res.render('formulario.handlebars')
})

app.post('/add', function(req, res){
  // tem que ser o name do campo que ta no form
  // res.send(`${req.body.titulo}\n${req.body.conteudo}`)

  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  }).then(function(){
    res.redirect('/')
  }).catch(function(erro){
    res.send("Erro" + erro)
  })
})

app.get('/deletar/:id', function(req, res){
  Post.destroy({where: {'id': req.params.id}})
  .then(function(){
    res.send('Postagem deletada com sucesso ')
  }).catch(function(erro){
    res.send('Erro' + erro)
  })
})

app.listen(8081, function(){ 
	console.log("Servidor rodando")
})