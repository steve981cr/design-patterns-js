console.log('---Generic--------------------------------------------------------');
(function() {
class MySingleton {
  constructor(prop1) {
    if(!MySingleton.instance) {
      this.prop1 = prop1;
      Object.seal(this); // Disallow adding properties/methods.
      MySingleton.instance = this;
    }
    return MySingleton.instance;
  }
  method1() {
    return `M1 returns P1 value: ${this.prop1}`;
  }
}
/*
// Client
const singleton = new MySingleton('Original val');
const singleton2 = new MySingleton('new val');
console.log(singleton === singleton2); // true
console.log(singleton2.method1()); // M1 returns P1 value: Original val
*/
})();

console.log('---Generic Obj literal--------------------------------------------');
(function() {
const mySingleton = {
  prop1: 'val',
  method1() {
    return `M1 returns P1 value: ${this.prop1}`;
  }
}
Object.seal(mySingleton);
/*
// Client
mySingleton.newProp = 'New prop val';
console.log(mySingleton.newProp); // undefined
*/
})();

console.log('---In-class storage - stored in an array--------------------------');
(function() {
// Singleton class
class Store {
  constructor(username) {
    if(!Store.instance) {
      this.storage = [];
      Object.seal(this); // Disallow adding properties/methods.
      Store.instance = this;
    }
    return Store.instance;
  }
  addItem(item) {
    this.storage.push(item);
  }
  getItem(id) {
    return this.storage.find((item) => item.id === id);
  }
}
/*
// Client: Create store object then add/get items.
const store = new Store();
store.addItem({id: 1, todo: 'Do this.', status: 'open'});
store.addItem({id: 2, todo: 'Do that.', status: 'done'});
console.log(store.getItem(2)); // {id: 2, todo: 'Do that.', status: 'done'}
console.log(store);
*/
// Export for testing
module.exports = { Store };
})();

console.log('---In-class storage - stored in an object--------------------------');
// Does not persist.
(function() {
// Adapter
class Store {
  constructor() {
    this.storage = {};
  }
  setItem(item) {
    this.storage[item.id] = item;
  }
  getItem(id) {
    return this.storage[id];
  }
}
/*
// Client
const store = new Store();
store.setItem({id: 1, todo: 'Do this.', status: 'open'});
store.setItem({id: 2, todo: 'Do that.', status: 'done'});
console.log(store.getItem(1));
*/
})();

console.log('---Storage Obj literal--------------------------------------------');
(function() {
const store = {
  storage: [],
  addItem(item) {
    this.storage.push(item);
  },
  getItem(id) {
    return this.storage.find((item) => item.id === id);
  }
}
Object.seal(store);
/*
// Client
store.name = 'Joey';
store.addItem({id: 1, todo: 'Do this.', status: 'open'});
store.addItem({id: 2, todo: 'Do that.', status: 'done'});
console.log(store.getItem(2));
console.log(store.name);
*/
})();