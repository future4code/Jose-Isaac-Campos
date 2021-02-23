/**
 * Exercícios de interpretação de código
 *
 * 1)
 * a. false
 * b. false
 * c. true
 * d. boolean
 *
 * 2)
 * a. undefined
 * b. null
 * c. 11
 * d. 3
 * e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
 * f. 9
 */

/**
 * Exercícios de escrita de código - 1
 */

let idade, melhorAmigoIdade

idade = Number(prompt('Digite sua idade:')) // a.
melhorAmigoIdade = Number(prompt('Digite a idade do seu ou sua melhor amigo(a):')) // b.

console.log('"Sua idade é maior do que a do seu melhor amigo?', idade > melhorAmigoIdade) // c.

console.log('Vocês tem ', idade - melhorAmigoIdade, ' anos de diferênça de idade entre vocês') //d.

/**
 * Exercícios de escrita de código - 2
 */

let numero

numero = Number(prompt('Digite um número par:')) // a.

console.log('Resto da divisão de ', numero, ' por 2: ', numero % 2); //b.

// c. o resto da divisão de qualquer número par por 2 sempre resulta em 0

// d. o resto da divisão de qualquer número ímpar por 2 sempre resulta em 1
