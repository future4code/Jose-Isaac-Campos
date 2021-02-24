/**
 * Exercícios de interpretação de código
 *
 * 1) O programa solicita ao usuário um número e com base nesse
 * número faz o teste se o mesmo é par ou ímpar.
 *
 * Caso seja par exibe a mensagem 'Passou no teste.' e caso seja
 * ímpar exibe 'Não passou no teste.'
 *
 *
 * 2) a. O código recebe o nome de um fruta e de acordo com a fruta
 * digitada pelo usuário atribue um valor a variável preço e exibe
 * em tela o valor para a fruta informada.
 *
 * b. 'O preço da fruta Maça é R$ 2.25'
 *
 * c. 'O preço da fruta Pêra é R$ 5'
 *
 *
 * 3) a. Esta solicitando a entra de uma número para o usuário
 * atraves do comando prompt, o retorno do prompt é passado para o
 * Number como um parâmentro, o number converte essa string em número,
 * o retorno de Number é atribuido a constante numero.
 *
 * b. Se o usuário digitasse 10 seria impresso 'Esse número passou no teste'
 * e logo após a mensagem seria impresso um erro, se ele digitasse -10 seria
 * impresso apenas o erro
 *
 * c. Sim, como a variável 'mensagem' é filha do 'if' e como o 'console.log'
 * que está solicitando está um escopo acima (global) ele não consegue ter acesso
 * a variável e imprime no console que a variável informada para o console não
 * foi definida, pois para ele a variável não existe no seu escopo.
 */


/**
 * Exercícios de escrita de código
 */

/**
 * EXERCÍCIO 4
 */
console.log('\n\nEXERCÍCIO 4\n\n')

const idade = Number(prompt('Digite a sua idade:'))

if (idade >= 18) {
  console.log('Você pode dirigir')
} else {
  console.log('Você não pode dirigir')
}


/**
 * EXERCÍCIO 5
 */
console.log('\n\nEXERCÍCIO 5\n\n')

const turno =
  prompt(
    'Informe o seu turno de estudo:\n' +
    'Por favor insira M (matutino) ou V (Vespertino) ou N (Noturno)'
  ).toUpperCase()

if (turno === 'M') {
  console.log('Bom Dia!')
} else if (turno === 'V') {
  console.log('Bom Tarde!')
} else if (turno === 'N') {
  console.log('Bom Noite!')
} else {
  console.log('Informe un turno valido')
}


/**
 * EXERCÍCIO 6
 */
console.log('\n\nEXERCÍCIO 6\n\n')

switch (turno) {
  case 'M':
    console.log('Bom Dia!')
    break
  case 'V':
    console.log('Bom Tarde!')
    break
  case 'N':
    console.log('Bom Noite!')
    break
  default:
    console.log('Informe un turno valido')
}


/**
 * EXERCÍCIO 7
 */
console.log('\n\nEXERCÍCIO 7\n\n')

let generoFilme = prompt('Digite o gênero do filme:').toLowerCase()
let valorImgresso = Number(prompt('Qual o valor do ingresso para o filme:'))

if (generoFilme === 'fantasia' && valorImgresso < 15) {
  console.log('Bom filme!')
} else {
  console.log('Escolha outro filme :(')
}


/**
 * Desafios de escrita de código
 */

/**
 * DESAFIO 1
 */
console.log('\n\DESAFIO 1\n\n')

generoFilme = prompt('Digite o gênero do filme:').toLowerCase()
valorImgresso = Number(prompt('Qual o valor do ingresso para o filme:'))

if (generoFilme === 'fantasia' && valorImgresso < 15) {
  let snack = prompt('Qual snack que você quer comprar?')
  console.log('Bom filme!\n... com ', snack)
} else {
  console.log('Escolha outro filme :(')
}
