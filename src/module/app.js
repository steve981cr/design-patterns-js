const store = require('./store.js');
// import store from './store.js';

// Use store module methods to write/read storage items.
store.set({id: 1, todo: 'Do this.', status: 'open'});
console.log(store.get(1)); // {id: 1, todo: 'Do this.', status: 'open'}
store.set({id: 1, todo: 'Do this.', status: 'closed'});
console.log(store.get(1)); //{id: 1, todo: 'Do this.', status: 'closed'}
store.set({id: 2, todo: 'Do that.', status: 'open'});


/*
// More methods:
console.log(1, store.getAll()); // logs store object with empty data.
store.set(1, {id: 1, todo: 'Do this.', status: 'closed'});
console.log(2, store.getAll());
console.log(store.get(1));
store.set(2, {id: 2, todo: 'Do that.', status: 'open'});
store.set(3, {id: 3, todo: 'Do something else.', status: 'open'});
console.log(store.get(3)); // Logs item 3.
store.remove(3);
store.printAll(); // logs items 1 and 2.
store.printOpen(); // logs item 2
console.log(store); // logs store object with items 1 and 2.
store.removeAll();
console.log(store); // logs store object with empty data property.*/




