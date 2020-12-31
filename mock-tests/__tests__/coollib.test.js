//index.test.js
const coollib = require('../mylibs/coollib');

jest.mock('../mylibs/coollib');

test('Encontrar o arquivo', () => {
    const result = coollib.findTestTxt();
    expect(result).toBeTruthy();
})