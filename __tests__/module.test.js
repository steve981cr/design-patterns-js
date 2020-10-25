const store = require('../src/module/store.js');
// import store from '../src/module/store.js';

// Use store module methods to write/read storage items.
describe('Module: Storage Tests', () => {
  test("Can set and get items", () => {
    store.set({id: 1, todo: 'Do this.', status: 'open'});
    store.set({id: 2, todo: 'Do that.', status: 'open'});
    const item1 = store.get(1);
    expect(item1.todo).toBe('Do this.');
    expect(item1.status).toBe('open');
  });
  test("Can reset an existing item", () => {
    store.set({id: 1, todo: 'Do this.', status: 'closed'});
    const item1 = store.get(1);
    expect(item1.status).toBe('closed');
  });
  test("Can remove an item", () => {
    store.remove(2);
    const item2 = store.get(2);
    expect(item2).toBeUndefined();
  });
})
