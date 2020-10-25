const { ArticleFeed, User } = require('../src/observer.js');

describe('Observer: Article Feed Tests', () => {
  let articleFeed = new ArticleFeed;
  let joey = new User('Joey');
  let sheena = new User('Sheena');

  // Setup/teardown for each test
  beforeEach(function() {
    articleFeed.register(joey);
    articleFeed.register(sheena);
  });
  afterEach(function() {
    articleFeed.unregister(joey);
    articleFeed.unregister(sheena);
  });

  test("Article Feed Observers", () => {
    expect(articleFeed.observers).toContain(joey);
    expect(articleFeed.observers).toContain(sheena);
    expect(articleFeed.observers).toHaveLength(2);
  });
  test("Unregister Observer", () => {
    articleFeed.unregister(joey);
    expect(articleFeed.observers).not.toContain(joey);
    expect(articleFeed.observers).toContain(sheena);
  });
  test("Observers are notified when new article is published", () => {
    const articleFeedNotify = jest.spyOn(articleFeed, 'notifyAll');
    const joeyUpdate = jest.spyOn(joey, 'update');
    const sheenaUpdate = jest.spyOn(sheena, 'update');

    articleFeed.newArticle('Learn Design Patterns');
    // Test that the articleFeed object's notifyAll method was called.
    expect(articleFeedNotify).toHaveBeenCalled();
    // Test that the joey object's receive method was called.
    expect(joeyUpdate).toHaveBeenCalled();
    // Test that it was called with the title argument
    expect(sheenaUpdate).toHaveBeenCalledWith("Learn Design Patterns");
  });
})

