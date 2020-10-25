console.log('---Generic Example------------------------------------------------');
/*
This pattern is often used by libraries and frameworks that provide generic classes
*/

// Abstract superclass
class MyBaseClass {
  templateMethod() {
    this.initialStep();
    this.secondStep();
    this.thirdStep();
    this.finalStep();
  }
  // Helper methods
  initialStep() { console.log('Execute common initial process') }
  secondStep() {} // Empty hook method. 
  thirdStep() {} // Empty hook method. 
  finalStep() { console.log('Execute common final process') }
}
// Concrete classes
class ImplementationA extends MyBaseClass {
  secondStep() { console.log('Execute Class A specific process.') }
  thirdStep() { console.log('Execute Class A optional process.') }
}
class ImplementationB extends MyBaseClass {
  secondStep() { console.log('Execute Class B specific process.') }
}
/*
// Client
const instance1 = new ImplementationA();
instance1.templateMethod();
const instance2 = new ImplementationB();
instance2.templateMethod();
*/

console.log('---Shipping Example------------------------------------------------');

// Abstract superclass
class Shipment {
  constructor(orderData) {
    this.orderData = orderData;
  }
  shipProduct() {
    this.calcCost()
    this.stage();
    this.deliver();
    this.complete();
  }
  calcCost() {} // Empty hook function. 
  stage() { console.log(`Stage product for pickup`) }
  deliver() {} // Empty hook function. 
  complete() { console.log('Send update email to customer.') }
}
class StandardShipping extends Shipment {
  constructor(orderData) {
    super(orderData);
  }
  calcCost() { console.log('Standard shipping cost: $2.99') }
  deliver() { console.log('Deliver 5 days later.') }
}
class ExpressShipping extends Shipment {
  constructor(orderData) {
    super(orderData);
  }
  calcCost() { console.log('Express shipping cost: $5.99') }
  deliver() { console.log('Deliver Next Day') }
}
/*
// Client:
const orderData = { product: "Adapter Plug", sku: "7439", 
                    shipAddress: "1234 Main St, New York, NY"}
new ExpressShipping(orderData).shipProduct();
*/
// Export for testing
module.exports = { Shipment, StandardShipping, ExpressShipping };