console.log('---Generic Example------------------------------------------------'); 
// Interface - Selects strategy depending on the context
function taskX(context) {
  if (context === "A")
    return new StrategyA().run();
  if (context === "B")
    return new strategyB().run();
}
// Strategies (algorithms)
class StrategyA {
  run() {
    console.log('Doing stuff to achieve X');
    return 'Task X achieved';
  } 
}
class StrategyB {
  run() {
    console.log('Doing different stuff that achieves X');
    return 'Task X achieved';
  }
}
/*
// Client usage
let result = taskX("A");
console.log(result);
*/

console.log('---CC Payment Example---------------------------------------------');

// Interface - Selects strategy depending on the context (payment type)
function processPayment(name, paymentType, cardNumber, price) {
  if (paymentType === "Visa")
    return new Visa(name, cardNumber, price).process();
  if (paymentType === "MC")
    return new MC(name, cardNumber, price).process();
}
// Payment processing Strategies (algorithms)
class Visa {
  constructor(name, cardNumber, price) {
    this.name = name;
    this.cardNumber = cardNumber;
    this.price = price;
  }
  process() { return "Visa payment processed."; }
}
class MC {
  constructor(name, cardNumber, price) {
    this.name = name;
    this.cardNumber = cardNumber;
    this.price = price;
  }
  process() { return "MasterCard payment processed."; }
}
/*
// Client
let user = {name: "Joey", paymentType: "Visa", 
            cardNumber: "4123-5678-9012-4321"};
let product = {name: "plug adapter", price: 19.99}; 
const res = processPayment(user.name, user.paymentType, 
  user.cardNumber, product.price);
console.log(res);
*/

// Export for testing
module.exports = { processPayment };