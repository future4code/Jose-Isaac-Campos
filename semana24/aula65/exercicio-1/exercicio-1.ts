const isOneEdit = (firstString: string, secondString: string): boolean => {
  if (Math.abs(firstString.length - secondString.length) > 1) {
    return false;
  }

  if (firstString.length === secondString.length) {
    let quantifyCharDiference = 0;

    for (let i = 0; i < firstString.length; i++) {
      if (firstString[i] !== secondString[i]) {
        quantifyCharDiference++;
      }
    }

    if (quantifyCharDiference > 1) return false;
  }

  return true;
};

console.log(isOneEdit('banan', 'banana'));
console.log(isOneEdit('bananak', 'banana'));
console.log(isOneEdit('panana', 'banana'));
console.log(isOneEdit('bananaaa', 'banana'));
