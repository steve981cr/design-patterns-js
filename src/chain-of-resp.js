console.log('---Generic Example --------------------------------------------------');

// Handler Interface
class Handler {
  setSuccessor(handler) {
    this.successor = handler;
  }
  handleRequest() {
    let works = Math.round(Math.random()); // returns 0 or 1;
    if (works) {
      console.log(`Successfully handled by ${this.name}`);
    } else if (this.successor) {
      this.successor.handleRequest();
    } else {
      console.log('No handler worked.');
    }
  }
}
// Handler Classes
class ConcreteHandlerA extends Handler {
  constructor() {
    super();
    this.name = 'Handler A';
  }
}
class ConcreteHandlerB extends Handler {
  constructor() {
    super();
    this.name = 'Handler B';
  }
}
/*
// Client
const handlerA = new ConcreteHandlerA(); // Create handler objects.
const handlerB = new ConcreteHandlerB();
handlerA.setSuccessor(handlerB); // Set handler priority
handlerA.handleRequest(); // Run process
*/

console.log('---Payment Example -----------------------------------------------');

class PayMethod {
  setSuccessor(payMethod) {
    this.successor = payMethod;
  }
  pay(amount) {
    if (this.hasFunds(amount)) {
      return `Charged ${amount} to ${this.name}`;
    } else if (this.successor) {
      console.log(`${this.name}: Insufficent funds. Try: ${this.setSuccessor.name}`)
      return this.successor.pay(amount);
    } else {
      return 'No pay method has sufficient funds available.';
    }
  }
  hasFunds(amount) {
    return this.available >= amount;
  }
}

class CreditCard extends PayMethod {
  constructor(available) {
    super();
    this.name = 'creditcard';
    this.available = available;
  }
}

class DebitCard extends PayMethod {
  constructor(available) {
    super();
    this.name = 'debitcard';
    this.available = available;
  }
}

class Paypal extends PayMethod {
  constructor(available) {
    super();
    this.name = 'Paypal';
    this.available = available;
  }
}
/*
// Client: Create payment methods with available funds.
const creditcard = new CreditCard(100);
const debitcard = new DebitCard(200);
const paypal = new Paypal(300);
// Set payment method priorities
creditcard.setSuccessor(debitcard);
debitcard.setSuccessor(paypal);
// Client orders product and attempts to pay.
console.log(creditcard.pay(225));
*/

module.exports = { PayMethod, CreditCard, DebitCard, Paypal };