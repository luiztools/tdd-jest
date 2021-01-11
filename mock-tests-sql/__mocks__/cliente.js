const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

const ClienteMock = dbMock.define('cliente', {
    id: 1,
    nome: 'Luiz',
    idade: 32,
    uf: 'RS'
}, {
    instanceMethods: {
        save: function () {
            if (this.nome.length > 150) throw new Error('MAX LENGTH ERROR');
            this.id = 2;
            return this;
        }
    }
});

ClienteMock.count = () => { return 10; }

ClienteMock.$queryInterface.$useHandler((query, queryOptions, done) => {
    if (query === 'findAll') {
        const limit = queryOptions[0].limit ?? 10;
        const result = [];
        for (let x = 0; x < limit; x++)
            result.push(ClienteMock.build({ id: x, nome: 'cliente ' + x, idade: x, uf: 'RS' }));
        return result;
    }
})

module.exports = ClienteMock;