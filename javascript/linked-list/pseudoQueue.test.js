const PseudoQueue = require('./PseudoQueue.js');

describe('Tests all pseudoQueue methods', () => {
  test('Returns expected node values', () => {
    const pseuQue = new PseudoQueue();
    pseuQue.enqueue(1);
    pseuQue.enqueue(2);
    pseuQue.enqueue(3);
    const first = pseuQue.dequeue();
    const second = pseuQue.dequeue();
    const third = pseuQue.dequeue();
    expect(first).toBe(1);
    expect(second).toBe(2);
    expect(third).toBe(3);
  });
});

