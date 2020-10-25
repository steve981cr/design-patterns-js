console.log('---Generic Example------------------------------------------------');
(function() {
// US Socket (no adapter needed)
class Direct {
  constructor() {
    this.accepts = 3;
  }
  plugIn(prongs) {
    if (prongs === this.accepts) { return "Electricity"; } 
    else { return "Won't Fit"; }
  }
}
const direct = new Direct();
console.log(direct.plugIn(3));
// Albanian Socket - 10 socket holes
class Adaptee {
  constructor() {
    this.accepts = 10;
  }
  plugIn(prongs) {
    if (prongs === this.accepts) { return "Electricity"; } 
    else { return "Won't Fit"; }
  }
}
// Adapter - 3 prong plug to 10 hole socket
class Adapter {
  constructor() {
    this.adaptee = new Adaptee();
    this.accepts = 3;
    this.description = 'Adapts 3 prong plug to 10 prong socket'
  }
  plugIn(prongs) {
    if (prongs === this.accepts) { return this.adaptee.plugIn(10); } 
    else { return "Won't Fit"; }
  }
}
// Client: Try 3 prong plug without adapter, then with.
console.log(new Adaptee().plugIn(3)); // Won't fit
console.log(new Adapter().plugIn(3)); // Electricity
})();

console.log('---Shipment Example-----------------------------------------------');
(function() {
// Old interface
class Shipment {
  constructor(prod, warehouse, destination) {
    this.prod = prod;
    this.warehouse = warehouse;
    this.destination = destination;
  }
  ship() {
    console.log(`Shipment: ${this.prod} ${this.warehouse} ${this.destination}`);
    // return 'Shipment in progress'; 
  }
}
const shipment = new Shipment('plug adapter', 'West', '123 Main, Napa CA');
console.log(shipment.ship());
})();

console.log('---UPS Shipment Example-------------------------------------------');
(function() {
// Adaptee - UPS Interface
class UpsShipment {
  constructor(packageId, pickup, destination) {
    this.packageId = packageId;
    this.pickup = pickup;
    this.destination = destination;
  }
  ship() {
    return `UPS shipping pkg ${this.packageId} from 
    ${this.pickup} to ${this.destination}`;
  }
}
// Adapter Interface - Adapt in-house shipping to UPS Shipping
class UpsAdapter {
  constructor(prod, warehouse, destination) {
    this.prod = prod;
    this.warehouse = warehouse;
    this.destination = destination;
  }
  ship() {
    function getPackageId(prod) { return 'some ID'; }
    function getWarehouseAddress(warehouse) { return 'some address'}
    const upsShipment = new UpsShipment(getPackageId(this.prod), 
          getWarehouseAddress(this.warehouse), this.destination)
    return upsShipment.ship();
  }
}
// client
const upsShipment = new UpsAdapter('plug adapter', 'West', 
                                   '123 Main, Napa CA');
console.log(upsShipment.ship());
// UPS shipping pkg some ID from some address to 123 Main, Napa CA

// Export for testing
module.exports = { UpsAdapter };
})();
