const { CarOrder } = require('../src/method-chain.js');

describe('Method Chaining: Car Order Tests', () => {
  const jettaOrder = new CarOrder('Jetta');
  test("jettaOrder contains expected properties", () => {
    expect(jettaOrder).toMatchObject({ model: 'Jetta', trans: 'manual', options: [] });
    expect(jettaOrder.color).toBeUndefined();
  });

  test("jettaOrder contains chained properties", () => {
    jettaOrder.selectColor('silver').upgradeTrans().addAC().addStereo();
    expect(jettaOrder).toMatchObject({ model: 'Jetta', trans: 'automatic', 
      options: [ 'AC', 'Stereo' ],  color: 'silver' });
  });
})
