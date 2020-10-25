console.log('---Security Example-----------------------------------------------');

function downloadDoc(title) {
  return title.replace(/\s+/g, '-') + ".pdf"
}
const securityHandler = {
  apply: function(target, thisArg, args) {
    const title = args[0];
    const accessCode = args[1];    
    if (this.authenticate(accessCode)) {
      return target(title); 
    } else {
      return 'Access denied';
    }
  },
  authenticate: function(accessCode) {
    return accessCode === 'rightAccessCode';
  }
}
const securityProxy = new Proxy(downloadDoc, securityHandler);
/*
// Client
console.log(securityProxy('Security Manual', 'wrongAccessCode')); // denied.
console.log(securityProxy('Security Manual', 'rightAccessCode')); 
*/


console.log('---Caching Example------------------------------------------------');

function download(title) {
  console.log('---Calling External API---');
  return title.replace(/\s+/g, '-') + '.pdf';
}
const cache = {};
cacheHandler = {
  apply(target, thisArg, args) {
    const title = args[0];
    if(cache[title] == null) {
      cache[title] = Reflect.apply(target, thisArg, args);
    }
    return cache[title];
  }
}
const cacheProxy = new Proxy(download, cacheHandler);
/*
// Client
console.log(cacheProxy('JavaScript Manual'));
console.log(cacheProxy('Design Patterns Manual'));
console.log(cacheProxy('Nodejs Manual'));
console.log(cacheProxy('JavaScript Manual'));
console.log(cacheProxy('Design Patterns Manual'));
console.log(cacheProxy('Nodejs Manual'));
*/

console.log('---Validation Example---------------------------------------------');

const doc = {title: 'JavaScript ES5', file: 'JavaScript-ES5.pdf'};
const validationHandler = {
  set: function(obj, prop, value) {
    if (prop === 'file') {
      if (!/.+\.pdf$/.test(value)) {
        console.log('Must be in PDF format.');
        return false; // Indicate failed
      }
    }
    // The default behavior to store the value
    obj[prop] = value;
    // Indicate success
    return true;
  }
};
const validationProxy = new Proxy(doc, validationHandler);
/*
// Client
validationProxy.title = 'JavaScript ES6'; // Changing the title doesn't trigger validation
console.log(doc.title); // JavaScript ES6
validationProxy.file = 'JavaScript-ES6.doc'; // Logs: Must be in PDF format.
validationProxy.file = 'JavaScript-ES6.pdf';
console.log(doc.file); // File is changed to: JavaScript-ES6.pdf
*/

module.exports = { securityProxy, cacheProxy, download, cache, doc, validationHandler, validationProxy };