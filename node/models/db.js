import Sequelize from 'sequelize';

const sequelize = new Sequelize('curso-node', 'postgres', '01111971', {
    dialect: 'postgres',
    host: 'localhost'
  })

export { Sequelize, sequelize };
