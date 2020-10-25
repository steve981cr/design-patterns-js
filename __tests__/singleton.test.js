const { Store } = require('../src/singleton.js');

describe('Singleton: Store Tests', () => {
  const store = new Store();
  test("Store object created", () => {
    expect(store).toBeInstanceOf(Store);
  });
  store.addItem({id: 1, todo: 'Do this.', status: 'open'});
  store.addItem({id: 2, todo: 'Do that.', status: 'done'});
  test("Add items to store object", () => {
    expect(store.storage).toHaveLength(2);
    const item2 = store.getItem(2);
    // toMatchObject must be a full or partial subset of item2
    expect(item2).toMatchObject({todo: 'Do that.', status: 'done'});
  });
  test("Only one object can be created", () => {
    const store2 = new Store();
    // store and store2 point to the same object.
    expect(store2).toBe(store); 
    expect(store2.storage).toHaveLength(2);
  });
})
