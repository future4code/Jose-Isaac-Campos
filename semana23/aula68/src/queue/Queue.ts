export class Queue {
  constructor(private queue: any[] = []) {}

  public isEmpty(): boolean {
    return this.queue.length === 0;
  }

  public enqueue(item: any): void {
    const index = this.queue.length;
    this.queue.length++;
    this.queue[index] = item;
  }

  public dequeue(): void {
    if (this.queue.length === 0) {
      return undefined;
    }

    for (let i = 1; i < this.queue.length; i++) {
      this.queue[i - 1] = this.queue[i];
    }

    this.queue.length--;
  }

  public print = (): void => {
    console.log(this.queue);
    console.log('All items:\n----------------\n');

    for (let i = 0; i < this.queue.length; i++) {
      console.log(this.queue[i]);
    }
  };
}
