//Exercício 1

function inverteArray(array) {
   let length = array.length - 1

   let stopnumero = 0
   if (array.length % 2 === 0) {
      stopnumero = array.length / 2
   } else {
      stopnumero = array.length / (2 + 1)
   }

   let i = 0
   while (i <= stopnumero) {
      let temp = array[i]

      array[i] = array[length - i]
      array[length - i] = temp

      i++
   }
   return array
}

//Exercício 2

function retornaNumerosParesElevadosADois(array) {
   // implemente sua lógica aqui

   const numeroPar = retornaNumerosPares(array)

   const parAoQuadrado = numeroPar.map((numero) => {
      return (numero * numero)
   })

   return parAoQuadrado
}

//Exercício 3

function retornaNumerosPares(array) {
   // implemente sua lógica aqui

   return numeroPar = array.filter((numero) => {
      return (numero % 2 === 0)
   })
}

//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui

   let maiorNumero = array[0]

   array.forEach((numero) => {
      if (maiorNumero < numero) { maiorNumero = numero }
   })

   return maiorNumero
}

//Exercício 5

function retornaQuantidadeElementos(array) {
   // implemente sua lógica aqui
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2
   const booleano4 = !booleano3

   const resposta = [
      booleano1 && booleano2 && !booleano4,
      (booleano1 && booleano2) || !booleano3,
      (booleano2 || booleano3) && (booleano4 || booleano1),
      !(booleano2 && booleano3) || !(booleano1 && booleano3),
      !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
   ]

   return resposta
}

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
   const numerosPares = []

   let index = 0
   while (numerosPares.length !== n) {
      if (index % 2 === 0) { numerosPares.push(index) }
      index++
   }

   return numerosPares
}

// Exercício 8

function checaTriangulo(a, b, c) {
   // implemente sua lógica aqui
   if (a === b && b === c) { return 'Equilátero' }
   else if ((a === b && b !== c) || (a === c && b !== c)) { return 'Isósceles' }
   else { return 'Escaleno' }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
   const obj = {
      maiorNumero: 0,
      maiorDivisivelporMenor: false,
      diferenca: 0
   }

   if (num1 > num2) {
      obj.maiorNumero = num1
      obj.maiorDivisivelporMenor = (num1 % num2 === 0)
      obj.diferenca = num1 - num2
   } else {
      obj.maiorNumero = num2
      obj.maiorDivisivelporMenor = (num2 % num1 === 0)
      obj.diferenca = num2 - num1
   }

   return obj
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
   let ouveMudanca = false
   do {
      ouveMudanca = false
      for (let index = 0; index < array.length - 1; index++) {
         if (array[index] > array[index + 1]) {
            let temp = array[index]
            array[index] = array[index + 1]
            array[index + 1] = temp
            ouveMudanca = true
         }
      }
   } while (ouveMudanca !== false)

   return array
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
   let filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   return filme
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
   const filme = filmeFavorito()

   let atores = filme.atores

   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atores[0]}, ${atores[1]}, ${atores[2]}, ${atores[3]}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
   let retangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2 * (lado1 + lado2),
      area: lado1 * lado2
   }

   return retangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
   return {
      ...pessoa,
      nome: 'ANÔNIMO'
   }
}

// Exercício 16

const arrayDePessoas = [
   { nome: "Pedro", idade: 20 },
   { nome: "João", idade: 10 },
   { nome: "Paula", idade: 12 },
   { nome: "Artur", idade: 89 }
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   return arrayDePessoas.filter(pessoa => {
      if (pessoa.idade >= 20) { return true }
      return false
   })
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   return arrayDePessoas.filter(pessoa => {
      if (pessoa.idade < 20) { return true }
      return false
   })
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
   return array.map(numero => { return numero * 2 })
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   // implemente sua lógica aqui
   return array.map(numero => { return '' + (numero * 2) })
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
   return array.map(numero => {
      if (numero % 2 === 0) {
         return `${numero} é par`
      } else {
         return `${numero} é ímpar`
      }
   })
}

// Exercício 18

const pessoas = [
   { nome: "Paula", idade: 12, altura: 1.8 },
   { nome: "João", idade: 20, altura: 1.3 },
   { nome: "Pedro", idade: 15, altura: 1.9 },
   { nome: "Luciano", idade: 22, altura: 1.8 },
   { nome: "Artur", idade: 10, altura: 1.2 },
   { nome: "Soter", idade: 70, altura: 1.9 }
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
   return pessoas.filter(pessoa => {
      if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) { return true }
      return false
   })
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
   return pessoas.filter(pessoa => {
      if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60) { return true }
      return false
   })
}

//Exercício 19

const consultas = [
   { nome: "João", genero: "masculino", cancelada: false, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: true, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: false, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: true, dataDaConsulta: "04/11/2019" }
]

function retornaEmailConsulta() {
   // implemente sua lógica aqui
   return consultas.map(consulta => {
      if (consulta.cancelada) {
         if (consulta.genero === 'feminino') {
            return `Olá, Sra. ${consulta.nome}. Infelizmente sua consulta marcada para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`
         }
         return `Olá, Sr. ${consulta.nome}. Infelizmente sua consulta marcada para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`
      } else {
         if (consulta.genero === 'feminino') {
            return `Olá, Sra. ${consulta.nome}. Estamos enviando esta mensagem para lembrá-la da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse o recebimento deste-email.`
         }
         return `Olá, Sr. ${consulta.nome}. Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse o recebimento deste-email.`
      }
   })
}

//Exercício 20

const contas = [
   { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
   { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
   { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
   { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
   { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
   { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
   // implemente sua lógica aqui
   contas.forEach(conta => {
      const gastos = conta.compras.reduce((acc, current) => { return acc += current }, 0)
      conta.saldoTotal -= gastos
   })

   return contas
}