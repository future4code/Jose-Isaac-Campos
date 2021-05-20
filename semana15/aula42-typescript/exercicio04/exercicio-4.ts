type pokemon = {
    name: string,
    types: string,
    healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}

// 4) a) executaria o seguinte comando no terminar: tsc exercício-4.ts

// 4) b) mudaria porque agora seria necessário informar o path corretamente: tsc ./src/exercicio-4.ts

// 4) c) podemos informar os path dos arquivos no tsc ou apenas usar o tsc que vai transpilar todos 
//os arquivos .ts que encontrar no diretório

// 4) d) o arquivo criado possui bem mais opções para se configurar. Além de vim com algumns valores pré-definidos