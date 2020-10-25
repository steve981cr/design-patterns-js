// const { modVar, modFunc } = require('./myModule');

const { publicFunc, PublicClass } = require('./myModule');
import { publicFunc, PublicClass } from './myModule';

console.log(publicFunc()); // Some value
// If an imported component is a class, you can instantiate objects
const instance1 = new PublicClass('Joey');
console.log(instance1); // { name: 'Joey' }
