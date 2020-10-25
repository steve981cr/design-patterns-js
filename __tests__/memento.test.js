const { Order } = require('../src/memento.js');

describe('Memento: Order tests', () => {
  test('Create order instance', () => {
    const order = new Order(1, 'US Adapter Plug', 'Joey');
    order.save(); // Save state
    order.product = "EU Adapter Plug"; // Modify obj
    expect(order.product).toEqual('EU Adapter Plug');
  });

  test('Restore order to previous state', () => {
    const order = new Order(1, 'US Adapter Plug', 'Joey');
    order.save(); // Save state
    order.product = "EU Adapter Plug"; // Modify obj
    order.restore(order.id); // restore original state
    expect(order.product).toEqual('US Adapter Plug');
  });
});
