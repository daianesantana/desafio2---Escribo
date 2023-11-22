const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');
const User = sequelize.define('User', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_criacao: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  data_atualizacao: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  ultimo_login: {
    type: DataTypes.DATE,
    defaultValue: null,
  },
  token: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
});

module.exports = User;
