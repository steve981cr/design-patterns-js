const { Car, CustomCar } = require('../src/constructor.js');

describe('Constructor: Custom Car tests', function() {
  const carrera = new CustomCar('Carrera', 'red', 'manual', 'leather',
 'chrome');
  test('Create a custom car instance', function() {
    expect(carrera.model).toEqual('Carrera');
    expect(carrera.color).toEqual('red');
    expect(carrera.trans).toEqual('manual');
    expect(carrera.interior).toEqual('leather');
    expect(carrera.rims).toEqual('chrome');
  });
});
