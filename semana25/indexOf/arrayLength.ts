export const arrayLength = (source: Array<any>): number => {
  let size = 0;
  while (source[size]) {
    size++;
  }
  return size;
};
