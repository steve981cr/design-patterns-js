const { CarFactory } = require('../src/factory.js');

describe('Factory: Car Factory tests', () => {
  test('Create car instance', () => {
    const carOrder1 = CarFactory.create('Porsche', '911', 'manual', 'black');
    expect(carOrder1.model).toEqual('911');
  });

  test('Set color', () => {
    const carOrder1 = CarFactory.create('Porsche', '911', 'manual', 'black');
    expect(carOrder1.color).toEqual('black');
  });
});
