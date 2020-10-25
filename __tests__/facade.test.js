const { OneClickBuy } = require('../src/facade.js');

describe('Facade: e-Commerce one-click-buy tests', () => {
  test('Create OneClickBuy', () => {
    let userId = 10264; 
    let productId = 25237;
    const newOrder = new OneClickBuy(userId, productId).processOrder();
    expect(newOrder).toEqual('Product Shipped');
  });
});
