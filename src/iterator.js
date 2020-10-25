console.log('---Built-in Iterators------------------------------------------------');
console.log('---Array forEach()-----------------------------------------------');
const arr = ['a', 'b', 'c', 'skip', 'd', 'e']; 
arr.forEach((elem) => {
  if (elem !== 'skip') console.log(elem); 
})  // logs a b c d e.

console.log('---Array for... of-----------------------------------------------');
(function() {
const arr = ['a', 'b', 'c', 'skip', 'd', 'stop', 'e']; 
for (const elem of arr) {
  if (elem === 'skip') { continue; }  
  if (elem === 'stop') { break; }
  console.log(elem); 
}  // logs a b c d.
})();

console.log('---Array of objects for... of------------------------------------');
const usersArr = [{id: 1, name: 'Joey'}, {id: 2, name: 'Sheena'}]; 
for (const elem of usersArr) {
  console.log(`User ID: ${elem.id}, Name: ${elem.name}`);
}

console.log('---Obj for... in-------------------------------------------------');
const user = {name: 'Joey', age: 30, gender: 'male' }; 
for (let prop in user) {
  if (prop === 'age') { continue; }
  console.log(`${prop}: ${user[prop]}`);
} // logs name: Joey     gender: male

console.log('---Obj containing objects for... in------------------------------');
const obj = {
  1: {name: 'Joey', age: 22}, 
  2: {name: 'Sheena', age: 20}
};
for (let user in obj) {
  console.log(`UserID ${user}: ${obj[user].name}, ${obj[user].age}`);
} // logs UserID 1: Joey, 22       UserID: 2: Sheena, 20

console.log('---Linked List Iterator Example-----------------------------------');
/* 
  Linked lists are a type of data structure not natively supported by JavaScript.
  Each item in a linked list has a link to the item after it, except the last item.
  You can use an array to store the item objects, and add a next property to 
  each item to indicate the next item in the list.
*/  
// Iterator
class LinkedList {
  constructor(data) {
    this.data = data;
  }
  firstItem() {
    return this.data.find(item => item.head);
  }
  findById(id) {
    return this.data.find(item => item.id === id);
  }
  [Symbol.iterator]() {
    let item = {next: this.firstItem().id};
    return {
      next: () => {
        item = this.findById(item.next);
        if(item) {
          return {value: item.value, done: false};
        }
        return {value: undefined, done: true};
      }
    };
  }
}
/*
// Collection
const todoList = new LinkedList([
  {id: 1, value: 'A) Arrive late', next: 4, head: true },
  {id: 2, value: 'D) Leave early', next: null, head: false },
  {id: 3, value: 'C) Long lunch', next: 2, head: false },
  {id: 4, value: 'B) Do some work', next: 3, head: false }
]);
for (const item of todoList) {
  console.log(item); // 'A)...', 'B)...', 'C)...', 'D)...'
}
*/
module.exports = { LinkedList };