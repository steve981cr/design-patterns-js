const { Chatroom, Participant } = require('../src/mediator.js');

describe('Mediator: Chatroom Test', () => {
  // Set up for the tests:
  // Instantiate mediator
  const chatroom = new Chatroom();   
  // Instantiate participants
  const joey = new Participant("Joey"); 
  const sheena = new Participant("Sheena");
  const johnny = new Participant("Johnny");
  // Register participants.
  chatroom.register(joey);         
  chatroom.register(sheena);
  chatroom.register(johnny);
  // Create variables to spy on the receive methods
  let joeyReceive, sheenaReceive, johnnyReceive

  // Setup/teardown spys for each test
  beforeEach(function() {
    // Spy on the participants' receive method to test that it is called
    joeyReceive = jest.spyOn(joey, 'receive');
    sheenaReceive = jest.spyOn(sheena, 'receive');
    johnnyReceive = jest.spyOn(johnny, 'receive');
  });
  afterEach(function() {
    // Clear the spy on mocks so they don't interfere with the next test.
    joeyReceive.mockClear();
    sheenaReceive.mockClear();
    johnnyReceive.mockClear();
  });

  test("Chatroom participants", () => {
    expect(chatroom.participants).toContain(joey);
    expect(chatroom.participants).toContain(sheena);
    expect(chatroom.participants).toContain(johnny);
  });
  test("Other participants receive broadcast mssg", () => {
    joey.send("What are design patterns?");
    // Test that the sheena object's receive method was called.
    expect(sheenaReceive).toHaveBeenCalled();
    // Test that it was called with the arguments: message, sender
    expect(johnnyReceive).toHaveBeenCalledWith("What are design patterns?", joey);
  });
  test("Sender does not receive broadcast mssg", () => {
    joey.send("What are design patterns?");
    expect(joeyReceive).not.toHaveBeenCalled();
  });
  test("Only intended recipient receives direct mssg", () => {
    sheena.send("I thought you knew.", joey);
    expect(joeyReceive).toHaveBeenCalledWith("I thought you knew.", sheena);
    expect(sheenaReceive).not.toHaveBeenCalled();
    expect(johnnyReceive).not.toHaveBeenCalled();
  });
})
