console.log('---Generic Example-------------------------------------------------');
// Factory Class
class MyFactory {
  static create(param1, param2) {
    if (param1 === 'A') 
      return new MyClassA(param2);
    if (param1 === 'B')
      return new MyClassB(param2);
  }
}
// Sub Classes
class MyClassA {
  constructor(param2) {
    this.param2 = param2;
  }
}
class MyClassB {
  constructor(param2) {
    this.param2 = param2;
  }
}
/*
// Client: Call factory class to create objects from different classes
const instance1 = MyFactory.create('A', 'some arg');
const instance2 = MyFactory.create('B', 'some arg');
console.log(instance1);
console.log(instance2);
*/

console.log('---Car Factory Example--------------------------------------------');

// Factory Class
class CarFactory {
  static create(brand, model, transmission, color) {
    if (brand === 'VW')
      return new VW(model, transmission, color);
    if (brand === 'Porsche')
      return new Porsche(model, transmission, color);
  }
}
// Sub Classes
class VW {
  constructor(model, transmission, color) {
    this.model = model;
    this.transmission = transmission;
    this.color = color;
  }
}
class Porsche {
  constructor(model, transmission, color) {
    this.model = model;
    this.transmission = transmission;
    this.color = color;
  }
}
/*
// Client: Call factory class to create objects from different classes
const carOrder1 = CarFactory.create('Porsche', '911', 'manual', 'black');
const carOrder2 = CarFactory.create('VW', 'Jetta', 'automatic', 'blue');
console.log(carOrder1, "\n", carOrder2);
*/
// Export for testing
module.exports = { CarFactory };
