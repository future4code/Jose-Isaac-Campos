const printString = (string: string, index: number = 0): void => {
  if (string.length === index) return;

  console.log(string[index]);
  printString(string, index + 1);
};

printString('Hello World');
