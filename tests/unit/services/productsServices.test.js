const { expect } = require('chai');
const sinon = require('sinon');
const productsService = require('../../../src/services/productsService');
const { allProducts, productFound, productNotFoundMessage, productAdded, } = require('../mocks/productsMocks');

describe('Testes da camada Product Service', function () {
  describe('Testa a função getAllProducts', function () {
    afterEach(sinon.restore);
    it('Verifica se o retorno da função é um objeto', async function () {
      sinon.stub(productsService, 'getAllProducts').resolves({});
      const result = await productsService.getAllProducts();
      expect(result).to.be.a('object');
    });
    it('Verifica se retorna uma lista de produtos', async function () {
      sinon.stub(productsService, 'getAllProducts').resolves(allProducts);
      const result = await productsService.getAllProducts();
      expect(result).to.deep.equal(allProducts);
    });
  });
  describe('Testa a função getProductById', function () {
    afterEach(sinon.restore);
    it('Verifica se o retorno da função é um objeto', async function () {
      sinon.stub(productsService, 'getProductById').resolves({});
      const result = await productsService.getProductById();
      expect(result).to.be.a('object');
    });
    it('Verifica se retorna o produto encontrado', async function () {
      sinon.stub(productsService, 'getProductById').resolves(productFound);
      const result = await productsService.getProductById(2);
      expect(result).to.deep.equal(productFound);
    });
    it('Verifica se retorna mensagem de erro quando não encontra o produto', async function () {
      sinon.stub(productsService, 'getProductById').resolves(productNotFoundMessage);
      const result = await productsService.getProductById(3);
      expect(result.message).to.deep.equal(productNotFoundMessage.message);
    });
  });
  describe('Testa a função addNewProduct', function () {
    afterEach(sinon.restore);
    it('Verifica se o retorno da função é um objeto', async function () {
      sinon.stub(productsService, 'addNewProduct').resolves({});
      const result = await productsService.addNewProduct();
      expect(result).to.be.a('object');
    });
    it('Verifica se é possível adicionar um novo produto', async function () {
      sinon.stub(productsService, 'addNewProduct').resolves(productAdded);
      const name = "Arco de Garra";
      const response = await productsService.addNewProduct(name);
      expect(response).to.be.deep.equal(productAdded);
    });
  });
});