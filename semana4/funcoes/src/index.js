/**
 * Exercícios de interpretação de código
 *
 * 1)
 * a. 10
 * a. 50
 *
 * b. A função continuaria funcionando conforme o esperado,
 * poreém não seria impresso nada no console, pois não estariamos
 * o utilizando o console.log
 *
 *
 * 2) a. Como o for que está dentro da função so vai até 1, os valores
 * impressos no console seria:
 *   Darvas
 *   Caio
 *
 * b. Seria impresso:
 *  Amanda
 *  Caio
 *
 *
 * 3) Ela recebe um array e filtra apenas os números pares, e adiciona
 * eles em um novo array multiplicando o seu valor por ele mesmo. Um nome
 * mais discritivo para a função poderia ser parAoQuadrado
 *
 * */


/**
 * Exercícios de escrita de código
 */
console.log('\n\nExercícios de escrita de código')

// EXERCÍCIO 4
console.log('\n\nEXERCÍCIO 4\n')


//4) a)
console.log('\n\nEXERCÍCIO 4) a. :')
function aboutMe() {
  console.log('Eu sou Isaac, tenho 23 anos, moro na Paraíba e sou estudante.')
}

aboutMe()


// 4) b)
console.log('\n\nEXERCÍCIO 4) b. :')

function about(name, age, city, isStudent) {
  let phrase = ''

  if (isStudent) { phrase = 'sou' } else { phrase = 'não sou' }

  console.log(`Eu sou ${name}, tenho ${age} anos, moro em ${city} e ${phrase} estudante`)
}

about('Isaac', 22, 'Pedra Branca - PB', true)


// EXERCÍCIO 5
console.log('\n\nEXERCÍCIO 5\n')


// 5) a)
function sum(numA, numB) {
  return numA + numB
}

console.log('EXERCÍCIO 5) a. 4 + 10 :', sum(4, 10))


// 5) b)
function greaterOrEqual(numA, numB) {
  if (numA >= numB) { return true } else { return false }
}

console.log('EXERCÍCIO 5) b. 10 >= 8:', greaterOrEqual(10, 8))


// 5) c)
function repeatPhrase(phrase) {
  console.log('EXERCÍCIO 5) c.')
  for (let i = 0; i < 10; i++) {
    console.log(i, ': ', phrase)
  }
}

repeatPhrase('test test test test')


// EXERCÍCIO 6
console.log('\n\nEXERCÍCIO 6\n')

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// 6) a.
function numberOfItems(array) {
  return array.length;
}

console.log('EXERCÍCIO 6) a. Comprimento do array: ', numberOfItems(array))


// 6) b.
function isNumberEven(num) {
  if (num % 2 === 0) { return true } else { return false }
}

console.log('EXERCÍCIO 6) b. 22 é par: ', isNumberEven(array[array.length - 1]))


// 6) c.
function amountOfEvenNumbers(array) {
  let amount = 0

  for (let item of array) {
    if (item % 2 === 0) { amount++ }
  }

  return amount
}

console.log('EXERCÍCIO 6) c. quantidade de números pares: ', amountOfEvenNumbers(array))


// 6) d.
function amountOfEvenNumbers(array) {
  let amount = 0

  for (let item of array) {
    if (isNumberEven(item)) { amount++ }
  }

  return amount
}

console.log('EXERCÍCIO 6) d. quantidade de números pares: ', amountOfEvenNumbers(array))


/**
 * Desafio de escrita de código
 */
console.log('\n\nDesafio de escrita de código')


// DESAFIO 1
console.log('\n\nDESAFIO 1\n')

// 1) 1.
const print = (string) => { console.log(string) }

// 1) 2.
const sumNumber = (numA, numB) => {
  print('DESAFIO 1) ' + (numA + numB))
}

sumNumber(10, 20)


// DESAFIO 2
console.log('\n\nDESAFIO 2\n')

const numbers = [0, 8, 23, 16, 10, 15, 41, 12, 13]

// 2) a. 
const pairsSquared = (numbers) => {
  const pairsNumerous = []

  for (let num of numbers) {
    if (isNumberEven(num)) { pairsNumerous.push(num * 2) }
  }

  return pairsNumerous
}

console.log('DESAFIO 2) a. ', pairsSquared(numbers))


// 2) b.
const largestNumber = (numbers) => {
  let num = 0

  for (let number of numbers) {
    if (number > num) { num = number }
  }

  return num
}

console.log('DESAFIO 2) b. ', largestNumber(numbers))


// 2) c.
const indexOfLargestNumber = (numbers) => {
  const num = largestNumber(numbers)

  return numbers.indexOf(num)
}

console.log('DESAFIO 2) c. index: ', indexOfLargestNumber(numbers))


// 2) d.
const reverse = (numbers) => {
  let length = numbers.length - 1

  let stopNumber = 0
  if (numbers.length % 2 === 0) {
    stopNumber = numbers.length / 2
  } else {
    stopNumber = numbers.length / 2 + 1
  }

  let i = 0
  while (i <= stopNumber) {
    let temp = numbers[i]

    numbers[i] = numbers[length - i]
    numbers[length - i] = temp

    i++
  }
  return numbers
}

console.log('DESAFIO 2) d. ', reverse(numbers))