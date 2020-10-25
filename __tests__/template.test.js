const { Shipment, StandardShipping, ExpressShipping } = require('../src/template.js');

describe('Template: Shipment Tests', () => {
  const orderData = { product: "Adapter Plug", sku: "7439", 
                      shipAddress: "1234 Main St, New York, NY"}
  const shipment = new ExpressShipping(orderData)  
  test('Create shipment instance', () => {
    expect(shipment).toBeInstanceOf(ExpressShipping);
  });
  test("Shipment functions are called", () => {
    const calcCostSpy = jest.spyOn(shipment, 'calcCost');
    const stageSpy = jest.spyOn(shipment, 'stage');
    const deliverSpy = jest.spyOn(shipment, 'deliver');
    const completeSpy = jest.spyOn(shipment, 'complete');
    shipment.shipProduct();
    expect(calcCostSpy).toHaveBeenCalled();
    expect(stageSpy).toHaveBeenCalled();
    expect(deliverSpy).toHaveBeenCalled();
    expect(completeSpy).toHaveBeenCalled();
  });
})