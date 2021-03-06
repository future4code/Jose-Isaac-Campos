/***
 * Exercícios de interpretação de código
 *
 * 1) Resultado
 *  10
 *  10 5
 *
 * 2) Resultado
 *  10 10 10
 */

/**
 * Exercício de escrita de código - 1
 */
console.log('\n\n[ Exercício de escrita de código] - [1]\n\n')

// 1) a, b
let nome, idade

// 1) c
console.log('typeof nome: ', typeof nome, '\ntypeof idade: ', typeof idade)

/**
 * 1) d - resposta
 *  As variaveis foram criadas mais não foi atribuido nenhum valor a elas
 */

// 1) e
nome = prompt('Olá, qual o seu nome?')
idade = prompt('Prazer ' + nome + ',quantos anos você tem?')

// 1) f
console.log('typeof nome: ', typeof nome, '\ntypeof idade: ', typeof idade)

/**
 * 1) f - resposta
 *  Como agora as variaveis possuem um valor atribuido a elas o que é impresso
 * é o tipo do dados que eles possuem
 */

// 1) g
console.log('Olá ', nome, ', você tem ', idade, ' anos.');


/**
 * Exercício de escrita de código - 2
 */
console.log('\n\n[ Exercício de escrita de código] - [2]\n\n')

let serieFavorita,
  desenhoInfancia,
  corFavorita,
  localQueDesejaConhecer,
  animalPreferido

// Perguntas
serieFavorita = prompt(nome + ', qual sua série favorita?')

desenhoInfancia = prompt('Qual desenho que marcou sua infância ' + nome + '?')

corFavorita = prompt('Qual sua cor favorita?')

localQueDesejaConhecer = prompt('Se você acabasse de ganhar uma viagem com ' +
  'um pacote completo, que local desejaria conhecer?')

animalPreferido = prompt('Qual seu animal de estimação preferido?')

// Respostas
console.log('1. ', nome, ', qual sua série favorita?',
  '\nResposta: ', serieFavorita)

console.log('2. ', 'Qual desenho que marcou sua infância ', nome, '?',
  '\nResposta: ', desenhoInfancia)

console.log('3. ', 'Qual sua cor favorita?', '\nResposta: ', corFavorita)

console.log('4. ', 'Se você acabasse de ganhar uma viagem com um pacote ',
  'completo, que local desejaria conhecer?', '\nResposta: ', localQueDesejaConhecer)

console.log('5. ', 'Qual seu animal de estimação preferido?',
  '\nResposta: ', animalPreferido)

/**
 * Exercício de escrita de código - 3
 */
console.log('\n\n[ Exercício de escrita de código] - [3]\n\n')

const comidasFavoritas = ['Feijoada', 'Baião de dois', 'Lasanha', 'Tapioca', 'Macarronada']

// 3) a
console.log(comidasFavoritas)

// 3) b
console.log('Essas são as minhas comidas preferidas:')
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

// 3) c
let comidaPreferida

comidaPreferida = prompt(nome + ', qual sua comida preferida?')

comidasFavoritas[1] = comidaPreferida

console.log(comidasFavoritas)

/**
 * Exercício de escrita de código - 4
 */
console.log('\n\n[ Exercício de escrita de código] - [4]\n\n')

const perguntas = [
  'Curte ficção científica?',
  'Pretende ler os livros de Isaac Asimov?',
  'Gosta de Futebol?']

// 4) a
const respostas = [false, true]

// 4) b
console.log(perguntas[0], respostas[1])
console.log(perguntas[1], respostas[1])
console.log(perguntas[2], respostas[0])
