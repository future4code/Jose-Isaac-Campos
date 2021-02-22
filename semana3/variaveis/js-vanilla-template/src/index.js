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

animalPreferido = prompt('Qual seu animal estimação preferido?')

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