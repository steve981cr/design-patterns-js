const { UpsAdapter } = require('../src/adapter.js');

describe('Adapter Design Pattern Tests', function() {
  test('should return', function() {
    const upsShipment = new UpsAdapter('plug adapter', 'West', 
                                   '123 Main, Napa CA');
    const result = upsShipment.ship();
    expect(result).toMatch(/some ID/);
    expect(result).toMatch(/some address/);
    expect(result).toMatch(/123 Main, Napa CA$/);
  });
});