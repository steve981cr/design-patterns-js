console.log('---Generic Example------------------------------------------------');

// Facade
class ServiceFacade {
  constructor(name) {
    this.name = name;
  }
  complexProcesses(args) {
    let status = 'In process';
    status = new SubSystem1().process(args);
    status = new SubSystem2().process('More args');
    status = new SubSystem3().process('Even More args');
    return `${this.name} status is ${status}`;
  }
}
// Sub systems
class SubSystem1 {
  process(params) { /* Complex Process */ return 'P1 Complete' }
}
class SubSystem2 {
  process(params) { /* Complex Process */ return 'P2 Complete' } 
}
class SubSystem3 {
  process(params) { /* Complex Process */ return 'Complete' }
}
/*
// Client
const facade = new ServiceFacade('Request for Service');
const result = facade.complexProcesses('args');
console.log(result); // Request for Service status is Complete
*/

console.log('---ECommerce Example----------------------------------------------');

// Facade class
class OneClickBuy {
  constructor(userId, productId) {
    this.userId = userId;
    this.productId = productId;
  }
  processOrder() {
    let status = 'Order received';
    status = new Order().setup(this.userId, this.productId);
    status = new Payment().process('User credit card info');
    status = new Shipping().ship('pickup location', 'destination');
    return status;
  }
}
// Sub systems
class Order {
  setup(userId, productId) { /* Complex Process */ return 'Order set up.' }
}
class Payment {
  process(cardInfo) { /* Complex Process */ return 'Payment Processed' } 
}
class Shipping {
  ship(pickup, destination) { /* Complex Process */ return 'Product Shipped' }
}
/*
// Client: Logged in user clicks one-click-buy button.
let userId = 10264; let productId = 25237;
const newOrder = new OneClickBuy(userId, productId).processOrder();
console.log(newOrder); // Product Shipped
*/
// Export for testing
module.exports = { OneClickBuy };
