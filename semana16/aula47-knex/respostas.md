### Exercício 01
---
a) a resposta é um array que além dos dodos solicitados tras consigo os metadados daquela query

b) ``` export const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = '${name}'
    `)

    return result[0][0]
} ``` 

c) ``` export const countActorByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
    `)

    return result[0][0].count
} ```