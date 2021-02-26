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
   const jogador = []
   const computador = []
   let pontuacaoJogador = 0, pontuacaoComputador = 0

   let estaDiferente = false
   do {
      let carta = comprarCarta()
      jogador[0] = (carta.texto)
      pontuacaoJogador += carta.valor

      carta = comprarCarta()
      computador[0] = (carta.texto)
      pontuacaoComputador += carta.valor

      if (computador[0] !== jogador[0] || carta.texto !== 'A') {
         carta = comprarCarta()
         jogador.push(carta.texto)
         pontuacaoJogador += carta.valor

         carta = comprarCarta()
         computador.push(carta.texto)
         pontuacaoComputador += carta.valor

         estaDiferente = true;
         break
      } else {
         pontuacaoComputador = 0
         pontuacaoJogador = 0
      }
   } while (estaDiferente !== true)

   console.log('jogador: ', jogador, ' pontuação: ', pontuacaoJogador)

   let temosUmVencedor = false
   do {
      let cartasJogador = ''
      for (let carta of jogador) {
         cartasJogador += carta + ' '
      }

      if (confirm(
         `Suas cartas são ${cartasJogador}.A carta revelada do computador é ${computador[0]}.` +
         "\n" +  // \n faz pular a linha
         "Deseja comprar mais uma carta?"
      ) && pontuacaoJogador < 21) {
         let carta = comprarCarta()
         jogador.push(carta.texto)
         pontuacaoJogador += carta.valor

         console.log('Carta: ', carta.texto, 'Valor: ', carta.valor)

         console.log('Compra carta: ', jogador, ' pontuação: ', pontuacaoJogador)
      } else {
         if (pontuacaoJogador > 21) {
            temosUmVencedor = true;
            break;
         } else {

            while (pontuacaoComputador < pontuacaoJogador) {
               let carta = comprarCarta()
               computador.push(carta.texto)
               pontuacaoComputador += carta.valor
            }
         }
      }
   } while (temosUmVencedor != true)

   let cartasJogador = ''
   for (carta of jogador) {
      cartasJogador += carta + ' '
   }

   let cartasComputador = ''
   for (carta of computador) {
      cartasComputador += carta + ' '
   }
   console.log(`Usuário - cartas: ${cartasJogador} - pontuação ${pontuacaoJogador}`)
   console.log(`Computador - cartas: ${cartasComputador} - pontuação ${pontuacaoComputador}`)

   if (pontuacaoJogador > pontuacaoComputador && pontuacaoJogador <= 21) {
      console.log('O usuário ganhou!')
   } else if (pontuacaoJogador < pontuacaoComputador) {
      console.log('O computador ganhou!')
   } else {
      console.log('Empate!')
   }

} else {
   console.log('O jogo acabou!')
}