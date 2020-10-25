const { processPayment } = require('../src/strategy.js');

describe('Strategy: Payment Process tests', () => {
  test('Process payment function', () => {
    let user = {name: "Joey", paymentType: "Visa", cardNumber: "4123-5678-9012-4321"};
    let product = {name: "plug adapter", price: 19.99};
    const result = processPayment(user.name, user.paymentType, user.cardNumber, product.price);
    expect(result).toEqual('Visa payment processed.');
  });
});
