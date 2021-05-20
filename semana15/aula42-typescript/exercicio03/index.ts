// 3) a)

type post = {
    author: string,
    text: string
}


const posts: post[] = [
    {
        author: "Alvo Dumbledore",
        text: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        author: "Severo Snape",
        text: "Menos 10 pontos para Grifinória!"
    },
    {
        author: "Hermione Granger",
        text: "É levi-ô-sa, não levio-sá!"
    },
    {
        author: "Dobby",
        text: "Dobby é um elfo livre!"
    },
    {
        author: "Lord Voldemort",
        text: "Avada Kedavra!"
    }
]


function buscarPostsPorAutor(posts: post[], autorInformado: string): post[] {
    return posts.filter(
        (post) => {
            return post.author === autorInformado
        }
    )
}

// 3) b) temos como entrada um array de post e uma string com o nome do autor a ser filtrado
// a saída é um array de post que foi filtrado