import { arrayLength } from './arrayLength';

const indexOf = (source: Array<any>, query: any): number => {
  const length = arrayLength(source);

  for (let index = 0; index < length; index++) {
    if (source[index] === query) {
      return index;
    }
  }

  return -1;
};

console.log(indexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
