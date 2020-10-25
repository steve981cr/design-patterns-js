console.log('---Generic Example-----------------------------------------------');

// The prototype object's class
class ProtoClass {
  constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
  }
  method1() { return 'It works'; }
}
// The prototype object.
const protoObj = new ProtoClass('val1', 'val2');
// Create shallow copies. Can't access method1()
shallowCopy1 = {...protoObj};
shallowCopy2 = Object.assign({}, protoObj);
// Create a clone with protoObj as the prototype
cloneObj = Object.create(protoObj);


console.log('---Example Custom Car Order---------------------------------------');

class CarOrder {
  constructor(model, options) {
    this.model = model;
    this.options = options;
  }
  printOrder() {
    let order = `You ordered a ${this.color} ${this.model} with `;
    for (let option in this.options) {
      order += `${option}: ${this.options[option]}, `;
    }    
    console.log(order);
  }
}
/*
// Client
const options = { interior: 'leather', rims: 'chrome', 
    engine: 'turbo', trans: 'auto', stereo: 'top system' }
const deluxPackage = new CarOrder('Carrera', options);
// Use the deluxPackage object as the prototype
const deluxOrder = Object.create(deluxPackage);
// Also clone nested objects or they will reference the same object
deluxOrder.options = Object.create(deluxPackage.options);
// Make some modifications
deluxOrder.model = 'Targa'; // Change property
deluxOrder.color = 'yellow'; // Add property
deluxOrder.options.stereo = 'mid range'; // change nested property
deluxOrder.printOrder(); // You ordered a yellow Targa with interior: 
// leather, rims: chrome, engine: turbo, trans: auto, stereo: mid range
*/

module.exports = { ProtoClass, CarOrder }