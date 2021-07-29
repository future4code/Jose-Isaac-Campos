const checkParentheses = (params: string): boolean => {
  if (!params.length) {
    return true;
  }

  const openParentheses = {
    '(': 0,
    '[': 0,
    '{': 0,
  };

  const closeParentheses = {
    ')': 0,
    ']': 0,
    '}': 0,
  };

  for (let index = 0; index < params.length; index++) {
    if (openParentheses[params[index]] !== undefined)
      openParentheses[params[index]]++;

    if (closeParentheses[params[index]] !== undefined)
      closeParentheses[params[index]]++;
  }

  if (openParentheses['('] !== closeParentheses[')']) return false;
  if (openParentheses['['] !== closeParentheses[']']) return false;
  if (openParentheses['{'] !== closeParentheses['}']) return false;

  return true;
};

console.log(checkParentheses('([{}])'));
