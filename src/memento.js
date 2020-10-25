console.log('---Generic Example-----------------------------------------------');

class Originator {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  saveState() {
    return new Memento(this)
  }
  restoreState(obj) {
    this.id = obj.id;
    this.name = obj.name;
  }   
}
class Memento {
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
  }  
}
class CareTaker {
  constructor() {
    this.state = null;
  }
  setState(state) {
    this.state = state;
  }
  // Rollback to previous state (return memento object to originator)
  getState() {
    return this.state;
  }
}
/*
// Client usage:
const obj = new Originator(1, 'Original State');
const objCareTaker = new CareTaker();
objCareTaker.setState(obj.saveState());
obj.name = "Revised State";
console.log(obj.name); // Revised State
obj.restoreState(objCareTaker.getState());
console.log(obj.name); // Original State
*/

console.log('---Order Example-------------------------------------------------');
// Originator
class Order {
  constructor(id, product, buyer) {
    this.id = id;
    this.product = product;
    this.buyer = buyer;
  }
  save() {
    // order is the memento object, converted to a JSON obj.
    const order = JSON.stringify(this);
    orderStorage[this.id] = order;
  }
  restore(id) {
    let order = orderStorage[id];
    order = JSON.parse(order);
    this.product = order.product;
    this.buyer = order.buyer
  }  
}
// Caretaker object
const orderStorage = {};
/*
// Client
const order = new Order(1, 'US Adapter Plug', 'Joey');
order.save(); // Save state
order.product = "EU Adapter Plug"; // Modify obj
console.log(order.product); // logs "EU Adapter Plug"
order.restore(order.id); // restore original state
console.log(order.product); // logs "US Adapter Plug"
*/
// Export for testing
module.exports = { Order };