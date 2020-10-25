console.log('---Generic Example------------------------------------------------'); 
// Context Class
class Process {
  startProcess() {
    new InitialState(this);
  }
}
// State Classes
class InitialState {
  constructor(processObj) {
    this.processObj = processObj;
    this.actions();
  }
  actions() {
    /* Perform actions relevant to this state, then call next state */
    new IntermediateState(this.processObj);
  }
}
class IntermediateState {
  constructor(processObj) {
    this.processObj = processObj;
    this.actions();
  }
  actions() {
    /* Perform actions relevant to this state, then call next state */
    new FinalState(this.processObj);
  }
}
class FinalState {
  constructor(processObj) {
    this.processObj = processObj;
    this.actions();
  }
  actions() {
    /* Perform actions relevant to this state, then process complete */
    console.log('Done!!!');
  }
}
// Client
new Process().startProcess();

console.log('---Generic Example - Functions only-------------------------------');
function myProcess() {
  /* Initiate process */
  initialState();
}
function initialState() {
  /* Perform actions relevant to this state. Call next state when done */
  intermediateState();
}
function intermediateState() {
  /* Perform actions relevant to this state. Call next state when done */
  finalState();
}
function finalState() {
  /* Perform actions relevant to this state. Call next state when done */
}
myProcess();

console.log('---Shipment Example-----------------------------------------------');

class Shipment {
  constructor(orderData) {
    this.orderData = orderData;
  }
  shipProduct() {
    console.log('Shipping Order created');
    new PendingState(this);
  }
}
class PendingState {
  constructor(shipment) {
    this.shipment = shipment;
    this.actions();
  }
  actions() {
    console.log("Processing pending state actions");
    new TransitState(this.shipment);
  }
}
class TransitState {
  constructor(shipment) {
    this.shipment = shipment;
    this.actions();
  }
  actions() {
    console.log("Processing transit state actions");
    new DeliveredState(this.shipment);
  }
}
class DeliveredState {
  constructor(shipment) {
    this.shipment = shipment;
    this.actions();
  }
  actions() {
    console.log("Delivered state actions.");
  }
}
/*
// Client
const orderData = { product: "Adapter Plug", sku: "7439", 
                    shipAddress: "1234 Main St, New York, NY"}
new Shipment(orderData).shipProduct();
*/
// Export for testing
module.exports = Shipment;
