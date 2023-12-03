import { Queue } from '.';

describe('Queue', () => {
  it('should enqueue', () => {
    const queue = new Queue();

    expect(queue.size).toBe(0);

    queue.enqueue('one');

    expect(queue.size).toBe(1);

    queue.enqueue('two');

    expect(queue.size).toBe(2);
  });

  it('should dequeue', () => {
    const queue = new Queue(['one', 'two']);

    expect(queue.size).toBe(2);

    const firstItem = queue.dequeue();

    expect(firstItem).toBe('one');

    expect(queue.size).toBe(1);

    const secondItem = queue.dequeue();

    expect(secondItem).toBe('two');

    expect(queue.size).toBe(0);
  });
});
