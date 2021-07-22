import { Stack } from './Stack';

const stack = new Stack();

console.log('is empty: ' + stack.isEmpty());

stack.push(1);
stack.push(2);
stack.push(3);

stack.print();

console.log('item removed: ' + stack.pop());

console.log('is empty: ' + stack.isEmpty());

stack.print();
