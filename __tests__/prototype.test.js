const { ProtoClass, CarOrder } = require('../src/prototype.js');

describe('Prototype: Generic Example Shallow Copy Tests', () => {
  // Create an instance of ProtoClass:
  const protoObj = new ProtoClass('val1', 'val2');
  test('ProtoClass is the prototype of protoObj', () => {
    expect(protoObj instanceof ProtoClass).toBe(true);
    // toBe tests if the object's reference is the same.
    // ProtoClass is the same obect as ProtoClass.prototype.constructor.
    expect(ProtoClass).toBe(ProtoClass.prototype.constructor);
    // obj.__proto__ is the prototype property of the object. 
      // Object.getPrototypeOf(obj) also gets the prototype property of the object.
    // So protoObj's prototype is the ProtoClass prototype object
    expect(protoObj.__proto__).toBe(ProtoClass.prototype); 
  });
  // Create a shallow copy of protoObj using the spread operator 
  const shallowCopyA = {...protoObj};
  test('Spread operator creates a copy', () => {
    expect(shallowCopyA.prop1).toBe('val1');
    expect(shallowCopyA.prop2).toBe('val2');
    // toEqual tests if the owned property values in the object are the same.
    expect(shallowCopyA).toEqual(protoObj);
    // toBe tests if the object's reference is the same.
    expect(shallowCopyA).not.toBe(protoObj);
  });
  // Create a shallow copy of protoObj using Object.assign()
  shallowCopyB = Object.assign({}, protoObj);
  test('Object.assign() creates a copy', () => {
    expect(shallowCopyB.prop1).toBe('val1');
    expect(shallowCopyB.prop2).toBe('val2');
    // toEqual tests if the owned property values in the object are the same.
    expect(shallowCopyB).toEqual(protoObj);
    expect(shallowCopyB).toEqual(shallowCopyA);
    // toBe tests if the object's reference is the same.
    expect(shallowCopyB).not.toBe(protoObj);
    expect(shallowCopyB).not.toBe(shallowCopyA);
  });
  test('ProtoClass is not in the prototype chain of the shallow copies', () => {
    expect(shallowCopyA instanceof ProtoClass).toBe(false);
  });
  test('The Object global object is the prototype of a shallow copy', () => {
    expect(shallowCopyA.__proto__).not.toBe(ProtoClass.prototype);
    expect(shallowCopyA.__proto__).toBe(Object.prototype);
  });
  test("Shallow copies can't access properties/methods from ProtoClass", () => {
    expect(shallowCopyB.method1).toBeUndefined();
  });
});

describe('Prototype: Generic Example Clone Copy Tests', () => {
  // Create an instance of ProtoClass:
  const protoObj = new ProtoClass('val1', 'val2');
  // Create a clone with protoObj as the prototype
  cloneObj = Object.create(protoObj);
  test("The cloned object's prototype is protoObj", () => {
    expect(cloneObj.__proto__).toBe(protoObj); 
  });
  test("protoObj and cloneObj are both instances of ProtoClass", () => {
    expect(protoObj instanceof ProtoClass).toBe(true);
    expect(cloneObj instanceof ProtoClass).toBe(true);
  });
  test("adding properties to clones object doesn't affect prototype", () => {
    cloneObj.prop3 = 'val3';
    expect(protoObj.prop3).toBeUndefined();
  });
  test('Override property values in cloned object', () => {
    cloneObj.prop1 = 'new val1';
    expect(cloneObj.prop1).toBe('new val1');
    // the prototype object's property is still the same.
    expect(protoObj.prop1).toBe('val1');
  });
  // Assigning different values to properties from the prototype will override their values
  test('Changes to the prototype object also affect the cloned object unless overridden', () => {
    protoObj.prop2 = 'val2 updated by prototype';
    expect(cloneObj.prop2).toBe('val2 updated by prototype');
    cloneObj.prop2 = 'val2 overridden by clone';
    expect(cloneObj.prop2).toBe('val2 overridden by clone');
  });
})

describe('Prototype: Car Order Tests', () => {
  const options = { interior: 'leather', rims: 'chrome', 
    engine: 'turbo', trans: 'auto', stereo: 'top system' }
  const deluxPackage = new CarOrder('Carrera', options);
  // Use the deluxPackage object as the prototype
  const deluxOrder = Object.create(deluxPackage);
  deluxOrder.options = Object.create(deluxPackage.options);
  test("deluxPackage is the prototype of deluxOrder", () => {
    expect(deluxOrder).not.toBe(deluxPackage);
    expect(deluxOrder.__proto__).toBe(deluxPackage);
  });
  test("deluxPackage and deluxOrder are instances of CarOrder", () => {
    expect(deluxPackage).toBeInstanceOf(CarOrder);
    expect(deluxOrder).toBeInstanceOf(CarOrder);
  });
  test("Modifying the clone won't affect the prototype", () => {
    deluxOrder.model = 'Targa'; // Change property
    deluxOrder.color = 'yellow'; // Add property
    expect(deluxOrder.model).toBe('Targa');
    expect(deluxOrder.color).toBe('yellow');
    expect(deluxPackage.model).toBe('Carrera');
    expect(deluxPackage.color).toBeUndefined();
  });
  test("Modifying nested properties", () => {
    deluxOrder.options.stereo = 'mid range'; // change nested property
    expect(deluxOrder.options.stereo).toBe('mid range');
    expect(deluxPackage.options.stereo).toBe('top system');
  });
  test("Cloned object owned properties only include those added/modified", () => {
    // .toMatchObject checks if the key:value pairs are in deluxOrder. Can be all or just a subset.
    expect(deluxOrder).toMatchObject({model: 'Targa', color: 'yellow'});
    expect(deluxOrder).toMatchObject({options: {stereo: 'mid range'}});
    // Only checks owned properties, not those inherited from the deluxPackage prototype.  
    expect(deluxOrder).not.toMatchObject({engine: 'turbo'});    
  });
  const expected = {foo: 'bar'};
  it('matches if the actual object does not contain expected key: value pairs', () => {
    expect({bar: 'baz'}).toEqual(expect.not.objectContaining(expected));
  });
  it('matches if the actual object contains expected key: value pairs', () => {
    expect({foo: 'bar'}).toEqual(expect.objectContaining(expected));
  });
})
