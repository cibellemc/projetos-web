const Sequelize = require('sequelize');
const sequelize = new Sequelize('curso-node', 'postgres', '01111971', {
  dialect: 'postgres',
  host: 'localhost'
});

sequelize
  .authenticate() // verifica se conectou com sucesso
  .then(() => {
    console.log('Conexão bem-sucedida com o PostgreSQL.');
  })
  .catch(err => {
    console.error('Erro ao conectar-se ao PostgreSQL:', err);
  });

  // aula 18 
  const Postagem = sequelize.define('Postagem', {
    titulo: {
      type: Sequelize.STRING
    },
    conteudo: {
      type: Sequelize.TEXT
    }
  })

  const Usuario = sequelize.define('Usuario', {
    nome: {
      type:Sequelize.STRING
    },
    sobrenome: {
      type: Sequelize.STRING
    },
    idade: {
      type: Sequelize.INTEGER
    },
    email: {
      type: Sequelize.STRING
    }
  })

  sequelize.sync().then(() => {
    console.log('Tabelas criadas com sucesso');
  })
  .catch((erro) => {
    console.error('Erro ao criar as tabelas', erro);
  });

  Usuario.create({
    nome: "Cibelle",
    sobrenome: "Maciel",
    idade: 19,
    email: "cibelle@example.com"
  })

  Postagem.create({
    titulo: "primeiro post",
    conteudo: "aula 18, sobre models"
  })

  Postagem.create({
    titulo: "sintaxe de bd",
    conteudo: "para fazer uma consulta em uma tabela, é necessário colo cocar o nome da tabela entre aspas duplas"
  })

  /*
   * sequelize.sync({force: true})
   * poderia sincronizar de uma por uma, como Usuario.sync()*/

  