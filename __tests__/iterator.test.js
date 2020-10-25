const { LinkedList } = require('../src/iterator.js');

describe('Iterator: Linked List Tests', () => {
  const todoList = new LinkedList([
    {id: 1, value: 'A) Arrive late', next: 4, head: true },
    {id: 2, value: 'D) Leave early', next: null, head: false },
    {id: 3, value: 'C) Long lunch', next: 2, head: false },
    {id: 4, value: 'B) Do some work', next: 3, head: false }
  ]);

  const expectedValues = ['A) Arrive late', 'B) Do some work', 'C) Long lunch', 'D) Leave early'];
  test("Items iterate in order based on next property", () => {
    for (const item of todoList) {
      // ExpectedValues array is in the order that todoList should be iterated through
      expect(item).toBe(expectedValues.shift()); // 'A)...', 'B)...', 'C)...', 'D)...'
    }
  });
})
