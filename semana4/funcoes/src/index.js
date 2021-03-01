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
console.log('Exercícios de escrita de código')

// EXERCÍCIO 4
console.log('\n\nEXERCÍCIO 4\n')


//4) a)
function aboutMe() {
  console.log('Eu sou Isaac, tenho 23 anos, moro na Paraíba e sou estudante.')
}

console.log('\n\nEXERCÍCIO 4) a. :', aboutMe())


// 4) b)
function about(name, age, city, isStudent) {
  let phrase = ''

  if (isStudent) { phrase = 'sou' } else { phrase = 'não sou' }

  console.log(`Eu sou ${name}, tenho ${age} anos, moro em ${city} e ${phrase} estudante`)
}

console.log('\n\nEXERCÍCIO 4) b. :', about())


// EXERCÍCIO 5
console.log('\n\nEXERCÍCIO 5\n')


// 5) a)
function sum(numA, numB) {
  return numA + numB
}

console.log('\n\nEXERCÍCIO 5) a. :', sum())


// 5) b)
function greaterOrEqual(numA, numB) {
  if (numA >= numB) { return true } else { return false }
}

console.log('\n\nEXERCÍCIO 5) b. 10 >= 8:', greaterOrEqual(10, 8))


// 5) c)
function repeatPhrase(phrase) {
  console.log('EXERCÍCIO 5) c.')
  for (let i = 0; i < 10; i++) {
    console.log(i, ': ', phrase)
  }
}

repeatPhrase()


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