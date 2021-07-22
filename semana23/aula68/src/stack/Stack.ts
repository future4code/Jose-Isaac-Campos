import { LinkedList } from '../list/LikedList';

export class Stack {
  constructor(private stack: LinkedList = new LinkedList()) {}

  public isEmpty = (): boolean => {
    return !this.stack.head;
  };

  public push = (item: any): void => {
    this.stack.add(item);
  };

  public print = (): void => {
    console.log(this.stack.toString());
  };

  public pop = (): any => {
    return this.stack.pop();
  };
}
