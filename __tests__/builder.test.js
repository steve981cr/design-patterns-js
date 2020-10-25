const { CarBuilder } = require('../src/builder.js');

describe('Builder: Custom Car Builder tests', () => {
  test('Build car', () => {
    const carOrder = new CarBuilder('Carrera')
      .selectColor('red')
      .addLeatherInterior()
      .addDeluxRims()
      .build();
    expect(carOrder.model).toEqual('Carrera');
    expect(carOrder.color).toEqual('red');
    expect(carOrder.options).toContain('Leather Interior');
  });
})