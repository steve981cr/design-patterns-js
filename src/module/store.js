const path = require('path');
const fs = require('fs');

// Import native Node.js modules
// import path from 'path';
// import fs from 'fs';

// Use path module to set the path for the storage file.
const storageFile = path.join(__dirname, 'storage.json');
// Use fs module to overwrite the storage file with an empty object.
fs.writeFileSync(storageFile, '{}');
// Read the storage file synchronously. Parse it from JSON format.
const data = JSON.parse(fs.readFileSync(storageFile))
// The store object contains two methods to read and write to-do items.
const store = {
  get(id) {
    return data[id]; // returns specific item
  },
  set(item) {
    data[item.id] = item; // set property (key-value pair)
    fs.writeFileSync(storageFile, JSON.stringify(data));
  },
  remove(id) {
    delete data[id];
    fs.writeFileSync(storageFile, JSON.stringify(data));
  }
}


/* -----------------------------------------------------------------------------
  Alternatively use a Class instead of an object literal.
*/

class Store {
  constructor() {
    this.storage = path.join(__dirname, 'storage.json');
    this.data = JSON.parse(fs.readFileSync(this.storage));
  }
  get(id) {
    return this.data[id]; // returns specific item
  }
  getAll() {
    return this.data; // returns object with all items.
  }
  set(item) {
    this.data[item.id] = item;
    fs.writeFileSync(this.storage, JSON.stringify(this.data));
  }
  remove(id) {
    delete this.data[id];
    fs.writeFileSync(this.storage, JSON.stringify(this.data));
  }
  removeAll() {
    this.data = {};
    fs.writeFileSync(this.storage, JSON.stringify(this.data));
  }
  printAll() {
    console.log('---All Items---');
    for (let item in this.data) {
      console.log(this.data[item]);
    }
  }
  printOpen() {
    console.log('---Open Items---');
    for (let item in this.data) {
      if (this.data[item].status === 'open') {
        console.log(this.data[item]);
      }
    }
  }
}
// const store = new Store();

// export default store;
module.exports = store;