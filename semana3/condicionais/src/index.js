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

/**
 * DESAFIO 2
 */
console.log('\n\DESAFIO 2\n\n')


// categoria | etapa
// 0 -> categogoria 1 | 1 -> SF 
// 1 -> categogoria 2 | 2 -> DT
// 2 -> categogoria 3 | 3 -> FL
// 3 -> categogoria 4 | 1 -> SF
const categorias = [
  [1320.00, 660.00, 1980.00],
  [880.00, 440.00, 1320.00],
  [550.00, 330.00, 880.00],
  [220.00, 170.00, 330.00]
]

const etapasDosJogos = ['SF', 'DT', 'FL']


// entrada dos dados
const nome = prompt('Digite seu nome completo:')

let tipoDojogo = prompt(
  'Digite o tipo do jogo:\n' +
  'IN (internacional)\nDO (doméstico)'
).toUpperCase()

let etapaDoJogo = prompt(
  'Qual a etapo do jogo:\n' +
  'SF (semi-final)\n' +
  'DT (decisão de terceiro lugar)\n' +
  'FI (final)'
).toUpperCase()

const categoria = Number(prompt('Em qual categoria está o jogo: (1 á 4)'))
const quantidadeIngressos = Number(prompt('Quantidade de ingressos: '))


// processamento das informações
let valorTotal;

if (categoria >= 1 && categoria <= 4
  && (etapaDoJogo === etapasDosJogos[0]
    || etapaDoJogo === etapasDosJogos[1]
    || etapaDoJogo === etapasDosJogos[2])
) {
  valorImgresso = categorias[categoria - 1][etapasDosJogos.indexOf(etapaDoJogo)]
  valorTotal = valorImgresso * quantidadeIngressos;

  if (tipoDojogo === 'IN') {
    valorImgresso /= 4.10
    valorTotal /= 4.10
  }

} else {
  console.log('Informações inválidas')
}

// tipo de jogo
switch (tipoDojogo) {
  case 'DO':
    tipoDojogo = 'Nacional'
    break
  case 'IN':
    tipoDojogo = 'Internacional'
  default:
    console.log('Tipo do jogo inválido')
}

// etapa do jogo
switch (etapaDoJogo) {
  case 'SF':
    etapaDoJogo = 'Semifinais'
    break
  case 'DT':
    etapaDoJogo = 'Decisão de 3° lugar'
    break
  case 'FL':
    etapaDoJogo = 'Final'
    break
}

// exibindo os dados da compra
console.log('---Dados da compra---')
console.log('Nome do cliente: ', nome)
console.log('Tipo do jogo: ', tipoDojogo)
console.log('Etapa do jogo: ', etapaDoJogo)
console.log('Categoria: ', categoria)
console.log('Quantidade de Ingressos: ', quantidadeIngressos, ' ingressos')
console.log('---Valores---')

if (tipoDojogo === 'Internacional') {
  console.log('Valor do ingresso: U$ ', valorImgresso)
  console.log('Valor total: U$ ', valorTotal)
} else {
  console.log('Valor do ingresso: R$ ', valorImgresso)
  console.log('Valor total: R$ ', valorTotal)
}