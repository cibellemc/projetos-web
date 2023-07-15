const express = require("express") 
const app = express() // cria uma instância da função

// criação de rotas
app.get("/ola/:cargo/:nome/:cor", function(req, res){
	res.send(`<h1>Cargo: ${req.params.cargo}<h1>
    <h2>Nome: ${req.params.nome}<h2>
    <h2>Cor: ${req.params.cor}<h2>`) // req você obtem dados da requisição que foi feita em formato json
})

// precisa ser a última chamada do app
app.listen(8081, function(){ // bem semelhante ao módulo http
	console.log("Servidor rodando")
})