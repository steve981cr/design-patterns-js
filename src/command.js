console.log('---Generic Example------------------------------------------------');
// Wrap example in an IIFE to avoid name conflict (with Command class)
(function() {

class Receiver {
  constructor() { this.state = false; }
  setTrue() { this.state = true; }
  setFalse() { this.state = false; }
}
class Command {    
  constructor(receiver){
    this.receiver = receiver;
    this.commands = [];
    this.undoneCmds = []
  }
  execute(cmd){
    this.commands.push(cmd);
    return this.receiver[cmd]();
  }
  undo() {
    let lastCmd = this.commands.pop();
    this.undoneCmds.push(lastCmd);
    /* Code to undo lastCmd or call receiver method to do it */
    return this.lastCmd === true ? 
           this.receiver.setFalse() : this.receiver.setTrue();
  }
  redo() {
    let redoCmd = this.undoneCmds.pop();
    this.commands.push(redoCmd);
    return this.receiver[redoCmd]();
  }
}
/*
// Client executes commands:
let receiver = new Receiver()
console.log(receiver.state); // false
let cmd = new Command(receiver);
cmd.execute('setTrue'); // receiver.state: true
console.log(receiver.state); // true
cmd.execute('setFalse'); // receiver.state: false
console.log(receiver.state); // false
cmd.undo(); // receiver.state: true
console.log(receiver.state); // true
cmd.redo(); // receiver.state: false
console.log(receiver.state); // false
*/
})();

console.log('---Calculator Example---------------------------------------------');

// Receiver class
class Calculator {
  constructor(val) { this.val = val; }
  square() { return Math.pow(this.val, 2); }
  cube() { return Math.pow(this.val, 3); }
}
// Command class
class Command { 
  constructor(receiverObj) {
    this.receiverObj = receiverObj;
    this.lastCmd = '';
  }
  execute(cmd){
    this.lastCmd = cmd;
    return this.receiverObj[cmd]();
  }
  undo() { 
    return this.receiverObj.val; 
  }
  redo() { 
    return this.receiverObj[this.lastCmd](); 
  }
}
/*
// Client
let calcObj = new Calculator(4);
console.log(calcObj.square()); // 16
let calcCmd = new Command(calcObj);
console.log(calcCmd.execute('square')); // 16
console.log(calcCmd.execute('cube'));  // 64
console.log(calcCmd.undo());  // 4
console.log(calcCmd.redo());  // 64
*/
// Export for testing
module.exports = { Calculator, Command };