const { expect } = require('chai');
const sinon = require('sinon');
const salesModel = require('../../../src/models/salesModel');
const salesService = require('../../../src/services/salesService');
const { saleFound, saleNotFoundMessage } = require('./mocks/salesServicesMocks');

describe('Testes da camada Sales Service', function () {
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
  describe('Testa a função getSaleById', function () {
    afterEach(sinon.restore);
    it('Verifica se o retorno da função é um objeto', async function () {
      sinon.stub(salesModel, 'getSaleById').resolves(saleFound);
      const result = await salesService.getSaleById();
      expect(result).to.be.a('object');
    });
    it('Verifica se retorna o produto encontrado', async function () {
      const productFound = {
        "status": 200,
        "products": [
          {
            "id": 2,
            "name": "Machado Leviatã"
          },
        ],
      };
      sinon.stub(salesModel, 'getSaleById').resolves(productFound);
      const result = await salesService.getSaleById(1);
      expect(result.sale).to.deep.equal(productFound);
    });
    it('Verifica se retorna mensagem de erro quando não encontra o produto', async function () {
      sinon.stub(salesModel, 'getSaleById').resolves(saleNotFoundMessage);
      const result = await salesService.getSaleById(3);
      expect(result.sale.message).to.deep.equal(saleNotFoundMessage.message);
    });
  });
  describe('Testa a função addNewSale', function () {
    afterEach(sinon.restore);
    it('Verifica se o retorno da função é um objeto', async function () {
      sinon.stub(salesModel, 'addNewSale').resolves({});
      const result = await salesService.addNewSale([]);
      expect(result).to.be.a('object');
    });
    // it('Verifica se é possível adicionar um novo produto', async function () {
    //   sinon.stub(salesModel, 'addNewSale').resolves({});
    //   const result = await salesModel.addNewSale([]);
    //   expect(result.newProductCreated.id).to.be.deep.equal({});
    // });
  });
  describe('Testa a função deleteSale', function () {
    afterEach(sinon.restore);
    it('Verifica se o retorno da função é um objeto', async function () {
      sinon.stub(salesModel, 'deleteSale').resolves({});
      const result = await salesService.deleteSale();
      expect(result).to.be.a('object');
    });
  });
  describe('Testa a função updateSale', function () {
    afterEach(sinon.restore);
    it('Verifica se o retorno da função é um objeto', async function () {
      sinon.stub(salesModel, 'updateSale').resolves({});
      const result = await salesService.updateSale(1, []);
      expect(result).to.be.a('object');
    });
  });
});