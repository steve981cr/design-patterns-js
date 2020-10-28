// Variable component - not exported so stays private
const privateVar = 'Some value'; 
// Function component - returns the privateVar value
function publicFunc() { 
  return privateVar; 
}
class PublicClass {
  constructor(name) {
    this.name = name;
  }
}
// Export components you want to make directly available
export { publicFunc, PublicClass };
// commonjs syntax:
// module.exports = { publicFunc, PublicClass };