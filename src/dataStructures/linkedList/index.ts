class ListNode<T = string> {
  _key: string;
  _data: T;
  _next: ListNode<T> | null;

  constructor(key: string, data: T, next: ListNode<T> | null = null) {
    this._key = key;
    this._data = data;
    this._next = next;
  }

  changeNextNode(next: ListNode<T> | null) {
    this._next = next;
  }

  get key() {
    return this._key;
  }

  get next() {
    return this._next;
  }

  get data() {
    return this._data;
  }
}

export class LinkedList<T = string> {
  _head: ListNode<T> | null = null;
  _size: number = 0;

  constructor(data: { key: string, data: T }[] = []) {
    data.reduce(
      (previousListNode: ListNode<T> | null, currentItem) => {
        const currentListNode = new ListNode<T>(currentItem.key, currentItem.data);

        if (!previousListNode) {
          this._head = currentListNode;
        }

        previousListNode?.changeNextNode(currentListNode);

        this._size += 1;

        return currentListNode;
      },
      null,
    );
  }

  get head() {
    return this._head;
  }

  add(key: string, data: T) {
    const listNode = new ListNode<T>(key, data);

    if (this._head === null) {
      this._head = listNode;
    } else {
      let current = this._head;

      while (current.next !== null) {
        current = current.next;
      }

      current.changeNextNode(listNode);
    }

    this._size += 1;
  }

  find(key: string): ListNode<T> | null {
    let current = this._head;

    while (current && current?.key !== key) {
      current = current.next;
    }

    return current;
  }

  delete(key: string) {
    let current = this._head;
    let previous: ListNode<T> | null = null;

    while (current && (current?.key !== key || current?.next !== null)) {

      if (current?.key === key) {
        const linkToBeDeleted = current;

        if (!previous) {
          this._head = linkToBeDeleted.next;
        } else {
          previous?.changeNextNode(linkToBeDeleted.next);
        }
      }

      current = current.next;
      previous = current;
    }

    this._size -= 1;
  }

  _getSize() {
    let current = this._head;
    let size = 0;

    while (current !== null) {
      size += 1;
      current = current.next;
    }

    return size;
  }

  get size() {
    return this._size;
  }
}
