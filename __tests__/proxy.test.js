const proxies = require('../src/proxy.js');
// destructure the proxy objects.
const { securityProxy, cacheProxy, validationProxy } = proxies;

describe('Proxy: Security Tests', () => {
  test("Proxy to deny access when access code is incorrect", () => {
    const res = securityProxy('Security Manual', 'wrongAccessCode')
    expect(res).toBe('Access denied');
  });
  test("Document (string) is returned when access code is correct", () => {
    const res = securityProxy('Security Manual', 'rightAccessCode')
    expect(res).toBe('Security-Manual.pdf');
  });
})

describe('Proxy: Cache Tests', () => {
  test("Download returnst PDF and adds to cache", () => {
    const res = cacheProxy('JavaScript Manual');
    expect(res).toBe('JavaScript-Manual.pdf')
    expect(proxies.cache).toMatchObject({ 'JavaScript Manual': 'JavaScript-Manual.pdf' });
  });
  test("Second download added to cache", () => {
    const res = cacheProxy('Nodejs Manual');
    expect(res).toBe('Nodejs-Manual.pdf')
    expect(proxies.cache).toMatchObject({ 'Nodejs Manual': 'Nodejs-Manual.pdf' });
    expect(Object.keys(proxies.cache)).toHaveLength(2);
  });
  test("Already downloaded title taken from cache", () => {
    const downloadMock = jest.spyOn(proxies, 'download');
    const res = cacheProxy('JavaScript Manual');
    expect(res).toBe('JavaScript-Manual.pdf');
    // Download function should not be called
    expect(downloadMock).not.toHaveBeenCalled();
    // No change to number of objects in the cache.
    expect(Object.keys(proxies.cache)).toHaveLength(2);
  });
})

describe('Proxy: Validation Tests', () => {
  // Before each test ensure the doc.file is set
  beforeEach(() => {
    proxies.doc.file = 'JavaScript-ES5.pdf';
  });
  test("File with no extension is rejected", () => {
    validationProxy.file = 'JavaScript-ES6';
    expect(validationProxy.file).toBe('JavaScript-ES5.pdf');
    expect(proxies.doc.file).toBe('JavaScript-ES5.pdf');
  });  
  test("Non-pdf file extension is rejected", () => {
    validationProxy.file = 'JavaScript-ES6.doc';
    expect(validationProxy.file).toBe('JavaScript-ES5.pdf');
    expect(proxies.doc.file).toBe('JavaScript-ES5.pdf');
  });
  test("File with pdf extension is accepted", () => {
    validationProxy.file = 'JavaScript-ES6.pdf';
    expect(validationProxy.file).toBe('JavaScript-ES6.pdf');
    expect(proxies.doc.file).toBe('JavaScript-ES6.pdf');
  });
})
