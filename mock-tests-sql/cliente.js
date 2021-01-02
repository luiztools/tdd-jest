const Sequelize = require('sequelize');
const database = require('./db');

const Cliente = database.define('cliente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idade: { type: Sequelize.INTEGER },
    uf: { type: Sequelize.STRING(2) }
}, {
    timestamps: false
})

module.exports = Cliente;