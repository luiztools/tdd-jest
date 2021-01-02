//__tests__/index.test.js
const repository = require('../clienteRepository');

jest.mock('../cliente', () => {
    return require('../__mocks__/clienteMock');
});

test('findAll', async () => {

    const result = await repository.findAll(10);
    console.log(result);
    expect(result.length).toEqual(10);

})