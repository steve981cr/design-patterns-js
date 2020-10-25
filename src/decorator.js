console.log('---Generic Example------------------------------------------------');
// Base Class
class MyClass {
  constructor(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
  }
}
// Decorator functions add/change properties/methods to object.
function decorator1(obj) {
  obj.newProp = "Some value"
  obj.param1 = "New value for param1"
}
function decorator2(obj) {
  obj.otherNewProp = "Some other value"
  obj.param1 = "New value for param1"
}
/*
// Client: create a class instance.
const myObj = new MyClass('arg 1', 'arg 2');
// Call decorator functions to add/modify object properties/methods at runtime.
decorator1(myObj);
decorator2(myObj);
*/

console.log('---Car Order Example----------------------------------------------');
// Base class
class CarOrder {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
}
// Decorator functions
function addExtendedWarranty(car) {
  car.hasExtendedWarranty = true;
  car.price += 1000;
}
function addTax(car, rate) {
  car.price += car.price * rate;
}
/*
// Client: instantiate a car object.
const car = new CarOrder('Jetta', 20000);
console.log(car); // { model: 'Jetta', price: 20000 }
// Add options by calling decorator functions.
addExtendedWarranty(car);
addTax(car, .10); // Assume 10% tax rate
console.log(car); // { model: 'Jetta', price: 23100, 
                  //  hasExtendedWarranty: true }
*/
module.exports = { CarOrder, addExtendedWarranty, addTax };
