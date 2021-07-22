import { ListNode } from './ListNode';

export class LinkedList {
  constructor(public head: ListNode | null = null) {}

  public add = (value: any): void => {
    const node = new ListNode(value);

    if (!this.head) {
      this.head = node;
      return;
    }

    let currentSelectedNode = this.head;
    while (currentSelectedNode.next) {
      currentSelectedNode = currentSelectedNode.next;
    }

    currentSelectedNode.next = node;
  };

  public getAll = (): any => {
    const result: any[] = [];

    if (!this.head) {
      return [];
    }

    let currentSelectedNode: ListNode | null = this.head;

    while (currentSelectedNode) {
      result.push(currentSelectedNode.value);
      currentSelectedNode = currentSelectedNode.next;
    }

    console.log('Add new item');
    return result;
  };

  public toString = (): string => {
    const title = '\nAll items: \n-------------------\n';
    return title + this.getAll().join(', ');
  };
}
