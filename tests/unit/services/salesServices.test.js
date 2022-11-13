const { expect } = require('chai');
const sinon = require('sinon');
const salesModel = require('../../../src/models/salesModel');
const salesService = require('../../../src/services/salesService');

describe('Testes da camada Product Service', function () {
  describe('Testa a função getAllSales', function () {
    afterEach(sinon.restore);
    it('Verifica se o retorno da função é um objeto', async function () {
      sinon.stub(salesModel, 'getAllSales').resolves({});
      const result = await salesService.getAllSales();
      expect(result).to.be.a('object');
    });
    it('Verifica se retorna uma lista de produtos', async function () {
      sinon.stub(salesModel, 'getAllSales').resolves({});
      const result = await salesService.getAllSales();
      expect(result.products).to.deep.equal();
    });
  });
});