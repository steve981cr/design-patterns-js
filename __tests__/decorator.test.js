const { CarOrder, addExtendedWarranty, addTax } = require('../src/decorator.js');

describe('Decorator: Car Order tests', () => {
  const car = new CarOrder('Jetta', 20000);
  test('Create car instance', () => {
    expect(car.model).toEqual('Jetta');
    expect(car.price).toEqual(20000);
  });

  test('Add Extended Warranty', () => {
    addExtendedWarranty(car);
    expect(car.hasExtendedWarranty).toEqual(true);
    expect(car.price).toEqual(21000);
  });

  test('Add Tax', () => {
    const taxRate = .10
    addTax(car, taxRate);
    expect(car.price).toEqual(23100);
  });
});

