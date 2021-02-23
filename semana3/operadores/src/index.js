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
console.log('\n\nExercícios de escrita de código - 1\n\n')

let idade, melhorAmigoIdade

idade = Number(prompt('Digite sua idade:')) // a.
melhorAmigoIdade = Number(prompt('Digite a idade do seu ou sua melhor amigo(a):')) // b.

console.log('"Sua idade é maior do que a do seu melhor amigo?', idade > melhorAmigoIdade) // c.

console.log('Vocês tem ', idade - melhorAmigoIdade, ' anos de diferênça de idade entre vocês') //d.

/**
 * Exercícios de escrita de código - 2
 */
console.log('\n\nExercícios de escrita de código - 2\n\n')

let numero

numero = Number(prompt('Digite um número par:')) // a.

console.log('Resto da divisão de ', numero, ' por 2: ', numero % 2); //b.

// c. o resto da divisão de qualquer número par por 2 sempre resulta em 0

// d. o resto da divisão de qualquer número ímpar por 2 sempre resulta em 1

/**
 * Exercícios de escrita de código - 3
 */
console.log('\n\nExercícios de escrita de código - 3\n\n')

let listaDeTarefas = [] // a.

// b.
listaDeTarefas.push(prompt('Insira uma nova tarefa na lista:'))
listaDeTarefas.push(prompt('Insira uma nova tarefa na lista:'))
listaDeTarefas.push(prompt('Insira uma nova tarefa na lista:'))

console.log('Lista de tarefas: ', listaDeTarefas) // c.

let tarefaConcluida = Number(prompt('Digite o index referente a tarefa concluída')) // d.

listaDeTarefas.splice(tarefaConcluida, 1) // e.

console.log('Lista de tarefas: ', listaDeTarefas) // f.

/**
 * Exercícios de escrita de código - 4
 */
console.log('\n\nExercícios de escrita de código - 4\n\n')

let nomeDoUsuario, emailDoUsuario

nomeDoUsuario = prompt('Digite seu nome:')
emailDoUsuario = prompt('Digite seu e-mail: ')

console.log('O e-mail ', emailDoUsuario, ' foi cadastrado com sucesso. Seja bem-vinda(o), ', nomeDoUsuario, '!')

/**
 * Desafio de escrita de código - 1
 */
console.log('\n\nDesafio de escrita de código - 1\n\n')

console.log('77°F equivale á ', (77 - 32) * 5 / 9 + 273.15, '°K') // a.

console.log('80°C equivale á ', 80 * 9 / 5 + 32, '°F') // b.

console.log(
  '30°C equivale á ', 30 * 9 / 5 + 32, '°F',
  '\n30°C equivale á ', 30 + 273.15, '°K') // c.

let valorEmGrausCelcius

valorEmGrausCelcius = Number(prompt('Digete um valor em graus Celcius: '))

console.log(
  valorEmGrausCelcius + '°C equivale á ', valorEmGrausCelcius * 9 / 5 + 32, '°F',
  '\n' + valorEmGrausCelcius + '°C equivale á ', valorEmGrausCelcius + 273.15, '°K')

/**
 * Desafio de escrita de código - 2
 */
console.log('\n\nDesafio de escrita de código - 2\n\n')

let valorQuilowattHora = 0.05
let quantidadeQuilowattHoraConsumida, porcentagemDesconto

quantidadeQuilowattHoraConsumida = Number(prompt('Digite a quantidade de Quilowatt-hora consumida:'))
porcentagemDesconto = Number(prompt('Digite a porcentagem de desconto para a residência:'))

let valor = quantidadeQuilowattHoraConsumida * valorQuilowattHora
console.log('Total a ser pago (sem o desconto): R$: ', valor)

console.log('Total a ser pago (com o desconto de ', porcentagemDesconto, '%): R$: ', valor - valor * (porcentagemDesconto / 100))