const fs = require('fs');

function findTestTxt() {
    const files = fs.readdirSync('./');
    return files.some(f => f === 'test.txt');
}

module.exports = { findTestTxt }