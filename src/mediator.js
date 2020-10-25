console.log('---Generic Example------------------------------------------------');
(function() {
class Mediator { 
  constructor() {
    this.participants = [];
  }
  register(participant) {
    this.participants.push(participant);
    participant.mediator = this;
  }
  // Broadcast message
  send(message, from) {
    for (const participant of this.participants) {
      if (participant !== from) {
        participant.receive(message, from);          
      }
    }
  }
}
class Collegue {
  constructor(name) {
    this.name = name;
    this.mediator = null;
  }
  send(message) {
    this.mediator.send(message, this);
  }
  receive(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }  
}
/*
// Clients
let mediator = new Mediator();
const collegue1 = new Collegue('Collegue 1');
const collegue2 = new Collegue('Collegue 2');
const collegue3 = new Collegue('Collegue 3');
mediator.register(collegue1);
mediator.register(collegue2);
mediator.register(collegue3);
collegue1.send('Some message.');
console.log(mediator.participants);
*/
})();

console.log('-----------------------------------------------------------------');

class Chatroom {        // Mediator class
  constructor() {
    this.participants = [];
  }
  register(participant) {
    this.participants.push(participant);
    participant.chatroom = this;
  }
  send(message, from, to) {
    if (to) {            // Direct message
      to.receive(message, from);  
    } else {             // Broadcast message
      for (const participant of this.participants) {
        if (participant !== from) {
          participant.receive(message, from);          
        }
      }
    }
  }
}
class Participant {      // Collegue class
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }
  send(message, to) {
    this.chatroom.send(message, this, to);
  }
  receive(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }  
}
/*
// Client
const joey = new Participant("Joey"); // Instantiate participants
const sheena = new Participant("Sheena");
const johnny = new Participant("Johnny");
const chatroom = new Chatroom(); // Instantiate mediator
chatroom.register(joey);         // Register participants.
chatroom.register(sheena);
chatroom.register(johnny);
joey.send("Anyone know what design patterns are?"); // Interact
sheena.send("Nope.");
johnny.send("I thought you knew.", joey);
*/

module.exports = { Chatroom, Participant };