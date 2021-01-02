(async () => {

    const repository = require('./clienteRepository');
    const clientes = await repository.findAll(10);
    console.log(clientes);

})();
