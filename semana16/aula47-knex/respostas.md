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

<br>

### Exercício 02
---
a) ``` export const updateSalary = async (id: string, salary: number): Promise<string> => {
    if (isNaN(Number(salary))) return 'salary is not a number'

    await connection('Actor')
        .update({ salary: salary })
        .where({ id: id })

    return 'Updated!'
} ```

b) ``` export const deleteActorById = async (id: string): Promise<any> => {
    const res = await connection('Actor')
        .where({ id: id }).delete()
    return res
} ```

c) ```export const avgSalary = async (gender: string): Promise<any> => { return await connection('Actor').avg('salary as average').where({ gender })} ```

<br>

### Exercício 03
---
b) no index ``` app.get('/actor', countByGenderController) ``` 

<br>

countByGenderController:  ``` export const countByGenderController = ``` ``` async (req: Request, res: Response) => { ```
    ```try { ```
        ``` const gender = req.query.gender ```
       ``` if (!gender) { ```
           ``` throw new Error('gender not provided') ```
        ```}```
        ```if (gender !== 'female' && gender !== 'male') {```
            ```throw new Error('expected value female or male')```
        ```}```
        ```const count = await countActorByGender(gender)```
        ```res.status(200).send({gender: gender, count: count})```
    ```} catch (err) {```
        ```res.status(400).send({```
           ``` message: err.message,```
        ```});```
    ```}```