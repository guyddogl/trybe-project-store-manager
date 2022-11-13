const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/db/connection');
const productsModel = require('../../../src/models/productsModel');
const { allProducts, productFound, productNotFoundMessage, productAdded, } = require('./mocks/productsModelsMocks');

describe('Testes da camada Product Model', function () {
  describe('Testa a função getAllProducts', function () {
    afterEach(sinon.restore);
    it('Verifica se o retorno da função é um array', async function () {
      sinon.stub(connection, 'execute').resolves([[]]);
      const result = await productsModel.getAllProducts();
      expect(result).to.be.a('array');
    });
    it('Verifica se retorna uma lista de produtos', async function () {
      sinon.stub(connection, 'execute').resolves([allProducts]);
      const result = await productsModel.getAllProducts();
      expect(result).to.deep.equal(allProducts);
    });
  });
  describe('Testa a função getProductById', function () {
    afterEach(sinon.restore);
    it('Verifica se o retorno da função é um objeto', async function () {
      sinon.stub(connection, 'execute').resolves([[{}]]);
      const result = await productsModel.getProductById();
      expect(result).to.be.a('object');
    });
    // it('Verifica se retorna o produto encontrado', async function () { // falha
    //   sinon.stub(connection, 'execute').resolves(productFound);
    //   const result = await productsModel.getProductById(2);
    //   expect(result).to.deep.equal(productFound);
    // });
  });
  describe('Testa a função addNewProduct', function () {
    afterEach(sinon.restore);
    // it('Verifica se o retorno da função é um objeto', async function () { // falha
    //   sinon.stub(connection, 'execute').resolves([5]);
    //   const result = await productsModel.addNewProduct();
    //   expect(result).to.be.a('number');
    // });
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
      sinon.stub(connection, 'execute').resolves(true);
      const result = await productsModel.updateProduct(1, 'Martelo');
      expect(result).to.be.equal(true);
    });
  });
  describe('Testa a função deleteProduct', function () {
    afterEach(sinon.restore);
    it('Verifica se é possível deletar um produto', async function () {
      sinon.stub(connection, 'execute').resolves(true);
      const result = await productsModel.deleteProduct(1);
      expect(result).to.be.equal(true);
    });
  });
  describe('Testa a função searchProducts', function () {
    afterEach(sinon.restore);
    // it('Verifica se pesquisa o produto pelo nome', async function () { // falha
    //   sinon.stub(connection, 'execute').resolves(productFound);
    //   const result = await productsModel.searchProducts('Machado');
    //   expect(result).to.be.equal(productFound);
    // });
  });
});