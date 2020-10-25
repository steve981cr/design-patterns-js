const Shipment = require('../src/state.js');

describe('State: Shipment tests', () => {
  test('Create shipment instance', () => {
    const orderData = { product: "Adapter Plug", sku: "7439", 
                        shipAddress: "1234 Main St, New York, NY"}
    const shipment = new Shipment(orderData);
    expect(shipment).toBeInstanceOf(Shipment);
    shipment.shipProduct();
    // Check the console.logs
  });
});
