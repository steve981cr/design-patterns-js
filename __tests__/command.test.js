const { Calculator, Command } = require('../src/command.js');

describe('Command: Calculator Tests', () => {
  const calcObj = new Calculator(4);
  test("Run methods directly on calculator instance", () => {
    const res = calcObj.square();
    expect(res).toEqual(16);
  });
  // Using the command class
  let calcCmd = new Command(calcObj);
  test("Command methods", () => {
    expect(calcCmd.execute('square')).toEqual(16);
    expect(calcCmd.execute('cube')).toEqual(64);
  });
  test("Undo Command", () => {
    expect(calcCmd.undo()).toEqual(4);
  });
  test("Redo Command", () => {
    expect(calcCmd.redo()).toEqual(64);
  });
})
