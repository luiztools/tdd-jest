//__tests__/ibgeService.test.js
const ibgeService = require('../ibgeService');

const nock = require('nock');
nock('https://servicodados.ibge.gov.br')
    .persist()
    .get('/api/v1/localidades/estados')
    .reply(200, [{
        id: 53,
        sigla: 'DF',
        nome: 'Distrito Federal',
        regiao: { id: 5, sigla: 'CO', nome: 'Centro-Oeste' }
    }])

test('getUFs', async () => {
    const result = await ibgeService.getUFs();
    expect(Array.isArray(result)).toBeTruthy();
})