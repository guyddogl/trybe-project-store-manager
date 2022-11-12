const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

const productsController = require('../../../src/controllers/productsController');
const productsService = require('../../../src/services/productsService');
const { allProducts, productFound, productNotFoundMessage, productAdded, } = require('./mocks/productsControllerMocks');

describe('Testes da camada Product Controller', function () {
  describe('Testa a função getAllProducts', function () {
    afterEach(sinon.restore);
    it('Verifica se o status do retorno é 200', async function () {
      sinon.stub(productsService, 'getAllProducts').resolves(allProducts);
      const req = {};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await productsController.getAllProducts(req, res);
      expect(res.status).to.have.been.calledWith(200);
    });
  });
  describe('Testa a função getProductById', function () {
    afterEach(sinon.restore);
    it('Verifica se o status do retorno é 200', async function () {
      sinon.stub(productsService, 'getProductById').resolves(productFound);
      const req = { params: { id: 1 } };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await productsController.getProductById(req, res);
      expect(res.status).to.have.been.calledWith(200);
    });
    it('Verifica se apresenta mensagem de erro', async function () {
      sinon.stub(productsService, 'getProductById').resolves(productNotFoundMessage);
      const req = { params: { id: 5 } };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await productsController.getProductById(req, res);
      expect(res.json).to.have.been.calledWith(productNotFoundMessage);
    });
  });
  describe('Testa a função addNewProduct', function () {
    afterEach(sinon.restore);
    it('Verifica se o status do retorno é 201 e o novo produto é adicionado', async function () {
      sinon.stub(productsService, 'addNewProduct').resolves(productAdded);
      const req = { body: { name: 'Arco de Garra' } };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await productsController.addNewProduct(req, res);
      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith({ id: 3, name: 'Arco de Garra' });
    });
  });
  describe('Testa a função updateProduct', function () {
    afterEach(sinon.restore);
    it('Verifica se o status do retorno é 200 e o produto é atualizado', async function () {
      sinon.stub(productsService, 'updateProduct').resolves({ status: 200, productUpdated: { id: 1, name: "Novo Nome" } });
      const req = { params: { id: 1 }, body: { name: "Novo Nome" } };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await productsController.updateProduct(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith({ id: 1, name: "Novo Nome" });
    });
    it('Verifica se exibe mensagem de erro ao tentar atualizar um produto que não existe', async function () {
      sinon.stub(productsService, 'updateProduct').resolves({ status: 404, message: 'Product not found' });
      const req = { params: { id: 28 }, body: { name: "Novo Nome" } };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      await productsController.updateProduct(req, res);
      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
    });
  });
});