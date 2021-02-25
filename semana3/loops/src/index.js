/**
 * Exercícios de interpretação de código
 *
 * 1) A variável 'valor' está sendo incrementada com o valor dela mais
 * o valor de i a cada interação do for.
 * -> será exibido o valor 10
 *
 * 2) a. será exibido os número 19, 21, 23, 25, 27, 30 cada um em
 * uma linha diferente.
 *
 * b. sim, teriamos que ter uma variável declarada antes do for com ela
 * iniciando em 0 e detro do for na ultima linha do seu escopo teriamos
 * que ir incrementando ela de modo a aumentar uma unidade a cada interação
 * do for.
 *
 * DESAFIO 1
 *
 * seria impresso quatro linha em ordem cressente, onde a cade linha
 * seria adicionado um '0' a mais:
 *
 * linha 1 -> 0
 * linha 2 -> 00
 * linha 3 -> 000
 * linha 4 -> 0000
 */


/**
 * Exercícios de escrita de código
 */

// EXERCÍCIO 3
console.log('\n\nEXERCÍCIO 3\n')

// Este array será usado para exemplificar as respostas de todos os itens
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// 3) a. 
console.log('\n3)a.\n')

for (let numero of arrayOriginal) {
  console.log(numero)
}


// 3) b.
console.log('\n3)b.\n')

for (let numero of arrayOriginal) {
  console.log(numero / 10)
}


// 3) c.
console.log('\n3)c.\n')

const numerosPares = []

for (let numero of arrayOriginal) {
  if (numero % 2 === 0) {
    numerosPares.push(numero)
  }
}

console.log(numerosPares)


// 3) d.
console.log('\n3)d.\n')

for (let index = 0; index < arrayOriginal.length; index++) {
  const elemento = arrayOriginal[index];
  console.log('O elemento do índex ' + index + ' é: ' + elemento)
}


// 3) e.
console.log('\n3)e.\n')

let maiorNumero = arrayOriginal[0], menorNumero = arrayOriginal[0]

for (let numero of arrayOriginal) {
  if (maiorNumero < numero) {
    maiorNumero = numero
  }

  if (menorNumero > numero) {
    menorNumero = numero
  }
}

console.log('O maior número é ' + maiorNumero + ' e o menor é ' + menorNumero)

/**
 * DesafioS de escrita de código
 */

// DESAFIO 1
console.log('\n\DESAFIO 1\n')

let numeroSecreto

while (numeroSecreto !== null) {
  numeroSecreto = prompt('[JOGADOR: {1}] - Entre com um número secreto!')

  if (numeroSecreto === null) { break }
  console.log('Vamos jogar!')

  let numeroChutado, numeroTentativas = 0


  while (numeroChutado !== numeroSecreto && numeroChutado !== null) {
    numeroChutado = prompt('[JOGADOR: {2}] - Qual o número secreto:')

    if (numeroChutado == null) {
      console.log('[JOGADOR 2 DESISTIU!]')
      break
    }
    else if (numeroChutado === numeroSecreto) {
      console.log('Acertou!!!')
      console.log('O número de tentativas foi: ' + ++numeroTentativas)
      break
    }
    else {
      let error = 'Você errou. O número escolhido é '

      if (numeroChutado > numeroSecreto) { console.log(error + 'menor') }
      else { console.log(error + 'maior') }

      numeroTentativas++
    }
  }
}

console.log('Saindo do game...')