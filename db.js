const mysql = require("mysql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Sequelize } = require('sequelize');

// Conexão com o banco de dados
const sequelize = new Sequelize({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1234",
    database: "desafio2",
});

// Função para criptografar a senha
function senhaCodificada(senha) {
    return bcrypt.hashSync(senha, 10);
}

// Exporta a conexão com o banco de dados
module.exports = sequelize;
