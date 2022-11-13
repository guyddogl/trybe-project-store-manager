const saleFound = {
  "status": 200,
  "products": [
    {
      "date": "2022-11-12T23:16:29.000Z",
      "productId": 1,
      "quantity": 5
    },
    {
      "date": "2022-11-12T23:16:29.000Z",
      "productId": 2,
      "quantity": 10
    }
  ],
};


const saleNotFoundMessage = { "message": "Sale not found" };


module.exports = {
  saleFound,
  saleNotFoundMessage,
};