const allProducts = {
  "status": 200,
  "products": [
    {
      "id": 1,
      "name": "Lâminas do Caos"
    },
    {
      "id": 2,
      "name": "Machado Leviatã"
    },
  ],
};

const productFound = {
  "status": 200,
  "products": [
    {
      "id": 2,
      "name": "Machado Leviatã"
    },
  ],
};

const productNotFoundMessage = { "message": "Product not found" };

const newProduct = 'Arco de Garra';

const productAdded = {
  "status": 201,
  "newProductCreated": {
    "id": 3,
    "name": "Arco de Garra"
  }
};

module.exports = {
  allProducts,
  productFound,
  productNotFoundMessage,
  newProduct,
  productAdded,
};