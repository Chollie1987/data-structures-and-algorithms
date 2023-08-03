const Queue = require('../queue.js');

describe('queues', () => {
  test('can enqueue', () => {
    const q = new Queue();
    q.enqueue(3);
    expect(q.toString()).toBe('{ 3 } -> NULL');
  });
  test('can dequeue', () => {
    const q = new Queue();
    q.enqueue(3);
    q.enqueue(2);
    q.enqueue(1);
    let dQ3 = q.dequeue();
    expect(dQ3.value).toBe(3);
  });
});
