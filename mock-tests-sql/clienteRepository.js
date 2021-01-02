//clienteRepository.js
const Cliente = require('./cliente');

function findAll(limit) {
    return Cliente.findAll({ limit });
}

module.exports = { findAll }