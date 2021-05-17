const cliColor = require('../cli-color/cli-color')
const operation = process.argv[2];
let num1 = process.argv[3];
let num2 = process.argv[4];

const calc = () => {
  num1 = Number(process.argv[3])
  num2 = Number(process.argv[4])
  switch (operation) {
    case "add":
      return num1 + num2;
    case "sub":
      return num1 - num2;
    case "mult":
      return num1 * num2;
    case "div":
      return (num1 / num2);
    default: 'operation is invalid'
  }
};

if (operation) {
  if (num1) {
    if (isNaN(num1)) {
      console.log(`${cliColor.toYellow('É esperado um valor numérico para o segundo parâmetro!')}`);
    } else {
      if (num2) {
        if (isNaN(num2)) {
          console.log(
            `${cliColor.toYellow('É esperado um valor numérico para o terceiro parâmetro!')}`
          );
        } else {
          console.log(`${operation}: ${num1} and ${num2} -> ${cliColor.toGreen('result')}: ${calc()}`);
        }
      } else {
        console.log(`Esperava ${cliColor.toYellow('3')} parâmetros só recebi ${cliColor.toYellow('dois')}!`);
      }
    }
  } else {
    console.log(`Esperava ${cliColor.toYellow('3')} parâmetros só recebi ${cliColor.toYellow('um')}!`);
  }
} else {
  console.log(`Por favor, forneça os parâmetros esperado: ${cliColor.toYellow('node index.js operation number1 number2')}`);
}
