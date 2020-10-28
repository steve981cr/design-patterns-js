import { publicFunc, PublicClass } from './myModule.mjs';
// commonjs syntax:
// const { publicFunc, PublicClass } = require('./myModule.js');

console.log(publicFunc()); // Some value
// If an imported component is a class, you can instantiate objects
const instance1 = new PublicClass('Joey');
console.log(instance1); // { name: 'Joey' }
