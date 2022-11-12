const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/db/connection');
const productsModel = require('../../../src/models/productsModel');
const { allProducts, productFound, productNotFoundMessage, productAdded, } = require('./mocks/productsModelsMocks');

describe('Testes da camada Product Model', function () {
  describe('Testa a função getAllProducts', function () {
    afterEach(sinon.restore);
    it('Verifica se o retorno da função é um objeto', async function () {
      sinon.stub(connection, 'execute').resolves([[]]);
      const result = await productsModel.getAllProducts();
      expect(result).to.be.a('array');
    });
    it('Verifica se retorna uma lista de produtos', async function () {
      sinon.stub(productsModel, 'getAllProducts').resolves(allProducts);
      const result = await productsModel.getAllProducts();
      expect(result).to.deep.equal(allProducts);
    });
  });
  describe('Testa a função getProductById', function () {
    afterEach(sinon.restore);
    it('Verifica se o retorno da função é um objeto', async function () {
      sinon.stub(productsModel, 'getProductById').resolves({});
      const result = await productsModel.getProductById();
      expect(result).to.be.a('object');
    });
    it('Verifica se retorna o produto encontrado', async function () {
      sinon.stub(productsModel, 'getProductById').resolves(productFound);
      const result = await productsModel.getProductById(2);
      expect(result).to.deep.equal(productFound);
    });
    it('Verifica se retorna mensagem de erro quando não encontra o produto', async function () {
      sinon.stub(productsModel, 'getProductById').resolves(productNotFoundMessage);
      const result = await productsModel.getProductById(3);
      expect(result.message).to.deep.equal(productNotFoundMessage.message);
    });
  });
  describe('Testa a função addNewProduct', function () {
    afterEach(sinon.restore);
    it('Verifica se o retorno da função é um objeto', async function () {
      sinon.stub(productsModel, 'addNewProduct').resolves({});
      const result = await productsModel.addNewProduct();
      expect(result).to.be.a('object');
    });
    it('Verifica se é possível adicionar um novo produto', async function () {
      sinon.stub(productsModel, 'addNewProduct').resolves(productAdded);
      const name = "Arco de Garra";
      const response = await productsModel.addNewProduct(name);
      expect(response).to.be.deep.equal(productAdded);
    });
  });
  describe('Testa a função updateProduct', function () {
    afterEach(sinon.restore);
    it('Verifica se é possível atualizar um produto', async function () {
      sinon.stub(productsModel, 'updateProduct').resolves(true);
      const result = await productsModel.updateProduct(1, 'Martelo');
      expect(result).to.be.equal(true);
    });
  });
  describe('Testa a função deleteProduct', function () {
    afterEach(sinon.restore);
    it('Verifica se é possível atualizar um produto', async function () {
      sinon.stub(productsModel, 'deleteProduct').resolves(true);
      const result = await productsModel.deleteProduct(1);
      expect(result).to.be.equal(true);
    });
  });
  describe('Testa a função searchProducts', function () {
    afterEach(sinon.restore);
    it('Verifica se é possível atualizar um produto', async function () {
      sinon.stub(productsModel, 'searchProducts').resolves(productFound);
      const result = await productsModel.searchProducts('Machado');
      expect(result.products[0].name).to.be.equal('Machado Leviatã');
    });
  });
});