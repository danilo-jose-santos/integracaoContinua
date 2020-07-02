const Cliente = require("../models/Cliente.js")
describe('Clientes', () => {
    test('Deve fazer o teste de match', () => {
        
        const cliente = new Cliente();
        
        expect('cliente.nome').not.beUndefined;
    });
})