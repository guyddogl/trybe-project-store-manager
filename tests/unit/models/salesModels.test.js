const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/db/connection');
const salesModel = require('../../../src/models/salesModel');

describe('Testes da camada Sales Model', function () {
  describe('Testa a função getAllSales', function () {
    afterEach(sinon.restore);
    it('Verifica se o retorno da função é um array', async function () {
      sinon.stub(connection, 'execute').resolves([[]]);
      const result = await salesModel.getAllSales();
      expect(result).to.be.a('array');
    });
  });
  describe('Testa a função getSaleById', function () {
    afterEach(sinon.restore);
    it('Verifica se o retorno da função é um objeto', async function () {
      sinon.stub(connection, 'execute').resolves([{}]);
      const result = await salesModel.getSaleById();
      expect(result).to.be.a('object');
    });
  });
  describe('Testa a função addNewSale', function () {
    afterEach(sinon.restore);
    it('Verifica se o retorno da função é um objeto', async function () {
      sinon.stub(connection, 'execute').resolves([{}]);
      const result = await salesModel.addNewSale([]);
      expect(result).to.be.a('object');
    });
  });
  describe('Testa a função addSalesProducts', function () {
    afterEach(sinon.restore);
    it('Verifica se o retorno da função é um objeto', async function () {
      sinon.stub(connection, 'execute').resolves(true);
      const result = await salesModel.addSalesProducts({
        "productId": 1,
        "quantity": 10
      }, 1);
      expect(result).to.be.equal(true);
    });
  });
  describe('Testa a função addProductsSolds', function () {
    afterEach(sinon.restore);
    it('Verifica se o retorno da função é um objeto', async function () {
      sinon.stub(connection, 'execute').resolves([{}]);
      const result = await salesModel.addProductsSolds([
        {
          "productId": 1,
          "quantity": 1
        },
        {
          "productId": 2,
          "quantity": 5
        }
      ]);
      expect(result).to.be.a('object');
    });
  });
  describe('Testa a função updateSale', function () {
    afterEach(sinon.restore);
    it('Verifica se o retorno da função é um objeto', async function () {
      sinon.stub(connection, 'execute').resolves([{}]);
      const result = await salesModel.updateSale(1, [
        {
          "productId": 1,
          "quantity": 10
        },
        {
          "productId": 2,
          "quantity": 50
        }
      ]);
      expect(result).to.be.a('object');
    });
  });
  describe('Testa a função deleteSale', function () {
    afterEach(sinon.restore);
    it('Verifica se o retorno da função é um objeto', async function () {
      sinon.stub(connection, 'execute').resolves(true);
      const result = await salesModel.deleteSale(1);
      expect(result).to.be.equal(true);
    });
  });
});