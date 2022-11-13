const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

const salesController = require('../../../src/controllers/salesController');
const salesService = require('../../../src/services/salesService');
const { saleFound, saleNotFoundMessage } = require('./mocks/salesControllerMocks');

describe('Testes da camada Sales Controller', function () {
  describe('Testa a função getAllSales', function () {
    afterEach(sinon.restore);
    it('Verifica se o status do retorno é 200', async function () {
      sinon.stub(salesService, 'getAllSales').resolves({
        "status": 200,
        "sales": [
        ],
      });
      const req = {};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await salesController.getAllSales(req, res);
      expect(res.status).to.have.been.calledWith(200);
    });
  });
  describe('Testa a função getSaleById', function () {
    afterEach(sinon.restore);
    it('Verifica se o status do retorno é 200', async function () {
      sinon.stub(salesService, 'getSaleById').resolves(saleFound);
      const req = { params: { id: 1 } };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await salesController.getSaleById(req, res);
      expect(res.status).to.have.been.calledWith(200);
    });
    it('Verifica se apresenta mensagem de erro', async function () {
      sinon.stub(salesService, 'getSaleById').resolves(saleNotFoundMessage);
      const req = { params: { id: 5 } };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await salesController.getSaleById(req, res);
      expect(res.json).to.have.been.calledWith(saleNotFoundMessage);
    });
  });
  describe('Testa a função addNewSale', function () {
    afterEach(sinon.restore);
    it('Verifica se o status do retorno é 201 e o novo produto é adicionado', async function () {
      sinon.stub(salesService, 'addNewSale').resolves({
        "status": 201,
        "newSaleCreated": [
          {
            "productId": 1,
            "quantity": 1
          },
          {
            "productId": 2,
            "quantity": 5
          }
        ]
      });
      const req = {
        body: [
          {
            "productId": 1,
            "quantity": 1
          },
          {
            "productId": 2,
            "quantity": 5
          }
        ]
      };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await salesController.addNewSale(req, res);
      expect(res.status).to.have.been.calledWith(201);
    });
  });
});