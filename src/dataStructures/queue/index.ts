export class Queue<T = string> {
  _items: T[] = [];

  constructor(items: T[] = []) {
    this._items = items;
  }

  enqueue(item: T) {
    this._items.push(item);
  }

  dequeue() {
    return this._items.shift();
  }

  get size() {
    return this._items.length;
  }
}