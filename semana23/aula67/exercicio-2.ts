const recursiveSumNumbersUpTo = (number: number): number => {
  if (number === 0) return 0;

  return number + recursiveSumNumbersUpTo(number - 1);
};

console.log(recursiveSumNumbersUpTo(3));
