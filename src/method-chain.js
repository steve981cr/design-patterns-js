console.log('---Generic Example------------------------------------------------');

class MyClass {
  constructor(prop1) {
    this.prop1 = prop1;
  }
  addProp(prop2) {
    this.prop2= prop2;
    return this; // Return the updated object
  }
  changeProp1(updatedProp1) {
    this.prop1 = updatedProp1;
    return this; // Return the updated object
  }
}
/*
// Client instantiate an object:
const instance1 = new MyClass('P1 val');
instance1  // Chain methods to this object to modify it.
  .addProp('P2 val')
  .changeProp1('P1 new val');
console.log(instance1); // { prop1: 'P1 new val', prop2: 'P2 val' }
*/

console.log('---Car Order Example----------------------------------------------');

class CarOrder {
  constructor(model) {
    this.model = model;
    this.trans = 'manual';
    this.options = [];
  }
  selectColor(color) {
    this.color = color;
    return this;
  }
  upgradeTrans() {
    this.trans = 'automatic';
    return this;
  }
  addAC() {
    this.options.push("AC");
    return this;
  }
  addStereo() {
    this.options.push("Stereo");
    return this;
  }
  addPowerSteering(f) {
    this.options.push("Power Steering");
    return this;
  }
  printOrder() {
    console.log(`Model: ${this.model}, color: ${this.color}, 
    transmission: ${this.trans}, options: ${this.options.toString()}`)
  }
}
/*
// Client: places new car order
const jettaOrder = new CarOrder('Jetta');
jettaOrder
  .selectColor('silver')
  .upgradeTrans()
  .addAC()
  .addStereo();
console.log(jettaOrder); // { model: 'Jetta', trans: 'automatic', 
  //              options: [ 'AC', 'Stereo' ],  color: 'silver' }
*/
// Export for testing
module.exports = { CarOrder };