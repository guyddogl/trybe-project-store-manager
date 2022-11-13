const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

const salesController = require('../../../src/controllers/salesController');
const salesService = require('../../../src/services/salesService');

describe('Testes da camada Product Controller', function () {
  describe('Testa a função getAllSales', function () {
    afterEach(sinon.restore);
    it('Verifica se o status do retorno é 200', async function () {
      sinon.stub(salesService, 'getAllSales').resolves({});
      const req = {};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await salesController.getAllSales(req, res);
      expect(res.status).to.have.been.calledWith(200);
    });
  });
});