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
    const jogador = ['']
    const computador = ['']

    let pontosJogador = 0,
        pontosComputador = 0

    let estaDiferent = false
    do {
        let carta = comprarCarta()
        jogador[0] = carta.texto
        pontosJogador = carta.valor

        carta = comprarCarta()
        computador[0] = carta.texto
        pontosComputador = carta.valor

        if (jogador[0] === computador[0] && carta.texto[0] === 'A') {
            console.log('São iguais á A')
            pontosJogador = 0
            pontosComputador = 0
            break
        } else {
            carta = comprarCarta()
            jogador.push(carta.texto)
            pontosJogador += carta.valor

            carta = comprarCarta()
            computador.push(carta.texto)
            pontosComputador += carta.valor

            estaDiferent = true
            break
        }
    }
    while (estaDiferent !== true)

    console.log('CARTAS DO JOGADOR: ' + jogador + ' PONTUAÇÃO: ' + pontosJogador)
    console.log('CARTAS DO COMPUTADOR: ' + computador + ' PONTUAÇÃO: ' + pontosComputador)

    let temosUmVencedor = false
    do {
        if (confirm(`Suas cartas são ${stringCartas(jogador)}. A carta revelada do computador é ${computador[0]}.\n` + "Deseja comprar mais uma carta?") && pontosJogador <= 20) {
            let carta = comprarCarta()
            jogador.push(carta.texto)
            pontosJogador += carta.valor

            if (pontosJogador > 21) {
                temosUmVencedor = true
                break
            }
        } else {
            while (pontosComputador <= pontosJogador) {
                let carta = comprarCarta()
                computador.push(carta.texto)
                pontosComputador += carta.valor

                if (pontosComputador > 21) {
                    temosUmVencedor = true
                    break
                }
            }
        }
    } while (temosUmVencedor !== true)

    console.log(`Suas cartas são ${stringCartas(jogador)} . Sua pontuação é ${pontosJogador}.`)
    console.log(`As cartas do computador são ${stringCartas(computador)}. A pontuação do computador é ${pontosComputador}.`)

    if (pontosJogador > 21 && pontosComputador <= 21) {
        console.log('O Computador ganhou!')
    } else if (pontosComputador > 21 && pontosJogador <= 21) {
        console.log('O usuário ganhou!')
    } else {
        console.log('Empate!')
    }

} else {
    console.log('O jogo acabou!')
}

function stringCartas(cartas) {
    let string = ''
    for (carta of cartas) {
        string += carta + ' '
    }

    return string
}
