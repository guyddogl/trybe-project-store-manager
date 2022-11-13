const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../src/models/productsModel');
const productsService = require('../../../src/services/productsService');
const { allProducts, productFound, productNotFoundMessage, productAdded, } = require('./mocks/productsServicesMocks');

describe('Testes da camada Product Service', function () {
  describe('Testa a função getAllProducts', function () {
    afterEach(sinon.restore);
    it('Verifica se o retorno da função é um objeto', async function () {
      sinon.stub(productsModel, 'getAllProducts').resolves(allProducts);
      const result = await productsService.getAllProducts();
      expect(result).to.be.a('object');
    });
    it('Verifica se retorna uma lista de produtos', async function () {
      sinon.stub(productsModel, 'getAllProducts').resolves(allProducts);
      const result = await productsService.getAllProducts();
      expect(result.products).to.deep.equal(allProducts);
    });
  });
  describe('Testa a função getProductById', function () {
    afterEach(sinon.restore);
    it('Verifica se o retorno da função é um objeto', async function () {
      sinon.stub(productsModel, 'getProductById').resolves(productFound);
      const result = await productsService.getProductById();
      expect(result).to.be.a('object');
    });
    it('Verifica se retorna o produto encontrado', async function () {
      sinon.stub(productsModel, 'getProductById').resolves(productFound);
      const result = await productsService.getProductById(2);
      expect(result.product).to.deep.equal(productFound);
    });
    it('Verifica se retorna mensagem de erro quando não encontra o produto', async function () {
      sinon.stub(productsModel, 'getProductById').resolves(productNotFoundMessage);
      const result = await productsService.getProductById(3);
      expect(result.product.message).to.deep.equal(productNotFoundMessage.message);
    });
  });
  describe('Testa a função addNewProduct', function () {
    afterEach(sinon.restore);
    it('Verifica se o retorno da função é um objeto', async function () {
      sinon.stub(productsModel, 'addNewProduct').resolves({});
      const result = await productsService.addNewProduct();
      expect(result).to.be.a('object');
    });
    it('Verifica se é possível adicionar um novo produto', async function () {
      sinon.stub(productsModel, 'addNewProduct').resolves(productAdded);
      const name = "Arco de Garra";
      const result = await productsService.addNewProduct(name);
      expect(result.newProductCreated.id).to.be.deep.equal(productAdded);
    });
  });
  describe('Testa a função updateProduct', function () {
    afterEach(sinon.restore);
    it('Verifica se o retorno da função é um objeto', async function () {
      sinon.stub(productsModel, 'updateProduct').resolves({});
      const result = await productsService.updateProduct(1);
      expect(result).to.be.a('object');
    });
    it('Verifica se retorna erro ao tentar atualizar um produto que não existe', async function () {
      sinon.stub(productsModel, 'updateProduct').resolves({});
      const result = await productsService.updateProduct(5);
      expect(result).to.be.a('object');
    });
  });
  describe('Testa a função deleteProduct', function () {
    afterEach(sinon.restore);
    it('Verifica se o retorno da função é um objeto', async function () {
      sinon.stub(productsModel, 'deleteProduct').resolves({});
      const result = await productsService.deleteProduct();
      expect(result).to.be.a('object');
    });
  });
  describe('Testa a função searchProducts', function () {
    afterEach(sinon.restore);
    it('Verifica se o retorno da função é um objeto', async function () {
      sinon.stub(productsModel, 'searchProducts').resolves({});
      const result = await productsService.searchProducts();
      expect(result).to.be.a('object');
    });
  });
});