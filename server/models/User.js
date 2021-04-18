const { Sequelize, DataTypes } = require('sequelize');
const database = require('../config/database');

const User = database.define('users', {
    user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_password: {
        type: Sequelize.STRING,
        allowNull: false
    }
    });

module.exports = User;