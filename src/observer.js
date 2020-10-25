console.log('---Generic Example------------------------------------------------');
// Subject
class Subject {
  constructor() {
    this.observers = [];
  }
  register(observer) {
    this.observers.push(observer)
  }
  unregister(observer) {
    this.observers = this.observers.filter(elem => elem !== observer);
  }
  newEvent(event) {
    this.observers.forEach((observer) => {
      observer.update(event)
    })
  }  
}
// Observer
class Observer {
  update(event) {
    console.log(`Notification of ${event}`);
  }
}
/*
// Client
const mySubject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();
mySubject.register(observer1);
mySubject.register(observer2);
mySubject.newEvent('Some Event');
mySubject.unregister(observer1);
mySubject.newEvent('Some other event');
*/
console.log('---Article Feed Example-------------------------------------------');

// Users subscribe to get notified when a new article is posted.
// Subject
class ArticleFeed {  
  constructor() {
    this.title = '';
    this.observers = [];
  }
  register(observer) {
    this.observers.push(observer);
  }
  unregister(observer) {
    this.observers = this.observers.filter(elem => (elem !== observer));
  }
  newArticle(title) {
    this.title = title;
    this.notifyAll();
  }
  notifyAll() {
    return this.observers.forEach(observer => observer.update(this.title));
  }
}
// Observer
class User {
  constructor(name) {
    this.name = name;
  }
  update(title) {
    console.log(`Hey ${this.name}, check out this new article ${title}`);
  }
}
/*
// Client
let articleFeed = new ArticleFeed;
let joey = new User('Joey');
let sheena = new User('Sheena');
articleFeed.register(joey);
articleFeed.register(sheena);
articleFeed.newArticle('Learn JavaScript');
articleFeed.unregister(joey);
articleFeed.newArticle('Learn Patterns');
*/
module.exports = { ArticleFeed, User };

console.log('---Article Feed V2------------------------------------------------');
// Same example except users register on the class instead of an instance of the class.
// Enclose in an IIFE to avoid name collisions
(function() { 
  class ArticleFeed {  
    constructor(title, content) {
      this.title = title;
      this.content = content
    }
    static register(observer) {
      ArticleFeed.observers.push(observer);
    }
    static unregister(observer) {
      ArticleFeed.observers = ArticleFeed.observers.filter(elem => (elem !== observer));
    } 
    notifyAll() {
      return ArticleFeed.observers.forEach(observer => observer.update(this.title));
    }   
  }
  ArticleFeed.observers = [];

  class User {
    constructor(name) {
      this.name = name;
    }
    update(title) {
      console.log(`Hey ${this.name}, check out this new article ${title}`);
    }
  }
  /*
  // Client
  let article = new ArticleFeed;
  let joey = new User('Joey');
  let sheena = new User('Sheena');
  ArticleFeed.register(joey);
  ArticleFeed.register(sheena);
  new ArticleFeed('Learn JavaScript', 'Lorem Ipsum').notifyAll();
  ArticleFeed.unregister(joey);
  new ArticleFeed('Learn Patterns', 'Lorem Ipsum').notifyAll();
  */
})();