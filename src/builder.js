console.log('---Generic Example------------------------------------------------');

// Product
class Product {
  constructor() {
    this.name = null;
  }
}
// Builder
class Builder {
  constructor(name) {
    this.product = new Product(name);
    this.product.name = name;
  }
  addFeature1() {
    this.product.f1 = true;
    return this;
  }
  addFeature2() {
    this.product.f2 = true;
    return this;
  }
  build() {
    return this.product;
  }
}
/*
// Client
const product = new Builder('Prod A')
  .addFeature1()
  .addFeature2()
  .build();
console.log(product); // {name: "Prod A", f1: true, f2: true}
*/

console.log('---Custom Car Builder Example-------------------------------------');

// Product
class CustomCarOrder {
  constructor() {
    this.model = null;
    this.options = [];
  }
}
// Builder
class CarBuilder {
  constructor(model) {
    this.car = new CustomCarOrder();
    this.car.model = model;
  }
  selectColor(color) {
    this.car.color = color;
    return this;
  }
  addLeatherInterior() {
    this.car.options.push('Leather Interior');
    return this;
  }
  addDeluxRims() {
    this.car.options.push("Delux Rims");
    return this;
  }
  build() {
    return this.car;
  }
}
/*
// Client
const carOrder = new CarBuilder('Carrera')
  .selectColor('red')
  .addLeatherInterior()
  .addDeluxRims()
  .build();
console.log(carOrder); // { model: 'Carrera', color: 'red',
  // options: [ 'Leather Interior', 'Delux Rims' ]}
*/
// Export for testing
module.exports = { CarBuilder };
