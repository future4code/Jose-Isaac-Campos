const compressionString = (text) => {
  let currentSelectedChar = text[0];
  let compressionText = '';
  let count = 0;

  for (let index = 0; index < text.length; index++) {
    if (text[index] === currentSelectedChar) {
      count++;
    } else {
      compressionText += currentSelectedChar + count.toString();
      currentSelectedChar = text[index + 1];
      count = 1;
    }

    if (index === text.length - 1) {
      compressionText += currentSelectedChar + count.toString();
    }
  }

  return compressionText.length > text.length ? text : compressionText;
};

console.log(compressionString('aabbb'));
console.log(compressionString('aabccccaaa'));
console.log(compressionString('accurate'));
console.log(compressionString('escola'));
