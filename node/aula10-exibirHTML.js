const express = require("express") 
const app = express()

app.get("/", function(req, res){
	res.sendFile("C:/projetos-web/node/html/index.html") 
})

app.get("/sobre", function(req, res){
	res.sendFile(__dirname + "/html/sobre.html") 
})

// precisa ser a última chamada do app
app.listen(8081, function(){ // bem semelhante ao módulo http
	console.log("Servidor rodando")
})