const { PayMethod, CreditCard, DebitCard, Paypal } = require('../src/chain-of-resp.js');

describe('Chain of Responsibility: PayMethod tests', () => {
  // Set payment methods with balances
  let creditcard = new CreditCard(100);
  let debitcard = new DebitCard(200);
  let paypal = new Paypal(300);
  // Set payment method priorities
  creditcard.setSuccessor(debitcard);
  debitcard.setSuccessor(paypal);
  test("payment made with Paypal", () => {
    const res = creditcard.pay(225);
    expect(res).toBe("Charged 225 to Paypal");
  });
  test("payment made with creditcard", () => {
    const res = creditcard.pay(57);
    expect(res).toBe("Charged 57 to creditcard");
  });
  test("Insufficent funds", () => {
    const res = creditcard.pay(757);
    expect(res).toBe("No pay method has sufficient funds available.");
  });
})
