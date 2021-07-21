// letra a
const printNumbersInAscendingOrder = (number: number): void => {
  if (number < 0) return;

  printNumbersInAscendingOrder(number - 1);
  console.log(number);
};

printNumbersInAscendingOrder(5);

console.log('\n');

// letra b
const printNumbersInDescendingOrder = (number: number): void => {
  console.log(number);

  if (number === 0) return;

  printNumbersInDescendingOrder(number - 1);
};

printNumbersInDescendingOrder(5);
