// 1) a) acontece um error informando que é esperado um valor do tipo string 
// const myString: string = 0

// 1) b) Podemos usar a sintaxe do union type para aceitar os tipos number e string
const myNumber: number | string = 'asa'

// 1) c)
const person: { name: string, age: number, favoriteColor: string} = {
    name: 'Isaac',
    age: 22,
    favoriteColor: 'Yellow'
}

enum ColorArcoIris  { 
    RED = 'Red',
    ORANGE = 'Orange',
    YELLOW = 'Yellow',
    GREEN = 'Green',
    BLUE = 'Blue',
    ANIL = 'Anil',
    VIOLET = 'Violet'
}

type person = { name: string, age: number, favoriteColor: ColorArcoIris}

const person1: person = { name: 'Isaac', age: 22, favoriteColor: ColorArcoIris.YELLOW }
const person2: person = { name: 'Jayne', age: 22, favoriteColor: ColorArcoIris.VIOLET }
const person3: person = { name: 'Lisle', age: 21, favoriteColor: ColorArcoIris.VIOLET }