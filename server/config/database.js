const { Sequelize } = require('sequelize');

module.exports = new Sequelize('userDB', 'postgres', 'super102030', {
   host: 'localhost',
   dialect: 'postgres'
});