console.log('---Generic ES6 Example--------------------------------------------');
(function() { // IIFE used to avoid name conflict

class MyClass { 
  constructor(prop1, prop2) { 
    this.prop1 = prop1;
    this.prop2 = prop2; 
  } 
  method1() { return 'M1 result'; }
  method2() { return 'M2 result'; }
} 
// Client: Instantiate a new instance of the class
const instance = new MyClass('P1 val', 'P2 val'); 
console.log(instance); // { prop1: 'P1 val', prop2: 'P2 val' }

class ChildClass extends MyClass {
  constructor(prop1, prop2, prop3) {
    super(prop1, prop2);
    this.prop3 = prop3;
  }
  method2() { return 'new M2 result'; }
}
// Client: Instantiate a new ChildClass instance.
const childInstance = new ChildClass('P1 val', 'P2 val', 'P3 val');
console.log(childInstance); // { prop1: 'Prop1 val', prop2: 'Prop2 val' }
childInstance.method2(); // new M2 result

})();
console.log('---Generic ES5 Example---------------------------------------------');
(function() { // IIFE used to avoid name conflict

  function MyConstructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2; 
  }
  MyConstructor.prototype.function1 = function() {
    return 'F1 result';
  }
  MyConstructor.prototype.function2 = function() {
    return 'F2 result';
  }
  // Client: Create new object by calling the constructor function
  var instance = new MyConstructor('P1 val', 'P2 val');
  console.log(instance);
})();

console.log('---Car ES6 Example------------------------------------------------');
(function() { // IIFE used to avoid name conflict

class Car { 
  constructor(model, color, trans = 'manual'){ 
    this.model = model;
    this.color = color; 
    this.trans = trans;
  }
  print() {
    console.log(`Order: ${this.color} ${this.trans} ${this.model}`);
  }
}
// Client: Instantiate a new Car instance.
const jetta = new Car('Jetta', 'blue');
jetta.print(); // Order: blue manual Jetta

class CustomCar extends Car {
  constructor(model, color, trans, interior, rims) {
    super(model, color, trans);
    this.interior = interior;
    this.rims = rims;
  }
  print() {
    console.log(`Order: ${this.color} ${this.trans} ${this.model} 
    with ${this.interior} interior and ${this.rims} rims`);
  }
}
// Client: Instantiate a new Car instance.
const carrera = new CustomCar('Carrera', 'red', 'manual', 'leather',
 'chrome');
carrera.print(); 
// Order: red manual Carrera with leather interior and chrome rims

// Export for testing
module.exports = { Car, CustomCar };

})();

console.log('---Car ES5 Example------------------------------------------------');
(function() { // IIFE used to avoid name conflict

function Car(model, color, trans = 'manual') { 
  this.model = model;
  this.color = color; 
  this.trans = trans;
}
Car.prototype.print = function() {
  console.log('Order: ' + this.color + ' ' + this.trans + ' ' + this.model);
}
// Client: Instantiate a new Car instance.
const jetta = new Car('Jetta', 'blue');
jetta.print(); // Order: blue manual Jetta

})();