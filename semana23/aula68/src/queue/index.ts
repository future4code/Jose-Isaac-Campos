import { Queue } from './Queue';

const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.print();

queue.dequeue();

queue.print();
