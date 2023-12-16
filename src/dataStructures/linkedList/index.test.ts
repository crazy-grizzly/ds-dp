import { LinkedList } from '.';

describe('LinkedList', () => {
  it('should add element to empty list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();

    linkedList.add('key1', 'data1');

    expect(linkedList.head).not.toBeNull();
    expect(linkedList.size).toBe(1);

    const head = linkedList.head;

    expect(head?.key).toBe('key1');
    expect(head?.data).toBe('data1');
  });

  it('should initialize with data', () => {
    const linkedList = new LinkedList([
      {
        key: 'key1',
        data: 'data1'
      },
      {
        key: 'key2',
        data: 'data2'
      },
      {
        key: 'key3',
        data: 'data3'
      },
    ]);
    expect(linkedList.size).toBe(3);

    const item = linkedList.find('key2');

    expect(item).not.toBeNull();
    expect(item?.data).toBe('data2');

    console.log('linkedList', linkedList);
  });

  it('should remove element by key', () => {
    const linkedList = new LinkedList([
      {
        key: 'key1',
        data: 'data1'
      },
      {
        key: 'key2',
        data: 'data2'
      },
      {
        key: 'key3',
        data: 'data3'
      },
    ]);
    expect(linkedList.size).toBe(3);

    linkedList.delete('key1');

    expect(linkedList.size).toBe(2);

    const item = linkedList.find('key1');

    expect(item).toBeNull();
  });
});
