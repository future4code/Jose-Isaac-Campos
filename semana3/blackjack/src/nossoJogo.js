/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 *
 *
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 *
 *
 *
 */

console.log('Bem vindo ao jogo de Blackjack!')

if (confirm('Deseja iniciar um nova rodada?')) {
   const jogador = ['', 0]
   const computador = ['', 0]

   for (let i = 0; i < 2; i++) {
      let carta = comprarCarta()

      jogador[0] += carta.texto + ' '
      jogador[1] += carta.valor

      carta = comprarCarta()

      computador[0] += carta.texto + ' '
      computador[1] += carta.valor
   }

   console.log('Usuário - cartas: ' + jogador[0] + ' - pontuação ' + jogador[1])
   console.log('Computador - cartas: ' + computador[0] + ' - pontuação ' + computador[1])

   if (jogador[1] > computador[1]) {
      console.log('O usuário ganhou!')
   } else if (jogador[1] < computador[1]) {
      console.log('O computador ganhou!')
   } else {
      console.log('Empate!')
   }

} else {
   console.log('O jogo acabou!')
}