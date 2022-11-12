// const { expect } = require('chai');
// const sinon = require('sinon');
// const productsController = require('../../../src/controllers/productsController');
// const productsService = require('../../../src/services/productsService');
// const { allProducts, productFound, productNotFoundMessage, productAdded, } = require('../mocks/productsMocks');

// describe('Testes da camada Product Controller', function () {
//   describe('Testa a função getAllProducts', function () {
//     afterEach(sinon.restore);
//     it('Verifica se o retorno da função é um objeto', async function () {
//       sinon.stub(productsService, 'getAllProducts').resolves(allProducts);
//       const result = await productsController.getAllProducts();
//       console.log(result);
//       expect(result).to.be.a('object');
//     });
//     it('Verifica se retorna uma lista de produtos', async function () {
//       sinon.stub(productsService, 'getAllProducts').resolves(allProducts);
//       const result = await productsController.getAllProducts();
//       expect(result).to.deep.equal(allProducts);
//     });
//   });
//   describe('Testa a função getProductById', function () {
//     afterEach(sinon.restore);
//     it('Verifica se o retorno da função é um objeto', async function () {
//       sinon.stub(productsService, 'getProductById').resolves(productFound);
//       const result = await productsController.getProductById();
//       expect(result).to.be.a('object');
//     });
//     it('Verifica se retorna o produto encontrado', async function () {
//       sinon.stub(productsService, 'getProductById').resolves(productFound);
//       const result = await productsController.getProductById(2);
//       expect(result).to.deep.equal(productFound);
//     });
//     it('Verifica se retorna mensagem de erro quando não encontra o produto', async function () {
//       sinon.stub(productsService, 'getProductById').resolves(productNotFoundMessage);
//       const result = await productsController.getProductById(3);
//       expect(result.message).to.deep.equal(productNotFoundMessage.message);
//     });
//   });
//   describe('Testa a função addNewProduct', function () {
//     afterEach(sinon.restore);
//     it('Verifica se o retorno da função é um objeto', async function () {
//       sinon.stub(productsService, 'addNewProduct').resolves({});
//       const result = await productsController.addNewProduct();
//       expect(result).to.be.a('object');
//     });
//     it('Verifica se é possível adicionar um novo produto', async function () {
//       sinon.stub(productsService, 'addNewProduct').resolves(productAdded);
//       const name = "Arco de Garra";
//       const response = await productsController.addNewProduct(name);
//       expect(response).to.be.deep.equal(productAdded);
//     });
//   });
// });