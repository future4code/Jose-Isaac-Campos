# aula 45 - introdução a banco de dados e sql

### Exercício 1
a) 
- VARCHAR -> Indica ao banco de dados que aquela coluna pode receber uma cadeira de caracteres que recebe um valor máximo conforme o informado.

- PRIMARY KEY -> Indica ao banco de dados que a respectiva coluna sera ultilizada como a chave principal da tabela.

- NOT -> Assim como o ! faz no js o NOT faz a negação de um determinado valor.

- NOT NULL -> Indica ao banco de dados que a respectiva coluna não pode receber um valor null, isso que dizer que ela não pode estar vazia.

- DATE -> Indica ao banco de dados que a respectiva coluna recebe um valor do tipo data (yyyy, mm, dd).

b)
- SHOW DATABASES -> exibe uma lista com todos os banco de dados que estou conectado. No momento so o cruz-2114622-jose-campos

- SHOW TABLES -> exibe uma lista com todas as tabelas que tenho no meu banca de dados.

c) DESCRIBE Actor -> exibe uma lista com todas as colunas da tabela Actor

---
### Exercício 2

a) ``` INSERT INTO  Actor (id, name, salary, birth_date, gender)
VALUES(
  "002",
  "Glória Pires",
  1.200.000,
  "1963-08-23",
); ```

b) Error message: ``` Duplicate entry '002' for key 'PRIMARY' ``` esse error ocorre porque estamos tantando inserir um novo autor com o mesmo id de um autor já presente na tabela.

c)
1. o error ocorre porque a quantidade de colunas fornecidas não é igual a quantidade de valores fornecido.

2. correção: ``` INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
); ```

d) 
1. como a coluna name não possui um valor padrão e como ela foi definida como NOT NULL que informa que aquela coluna não pode ser vazia, isso emplica que é necessário informa o valor de name ao inserir novos dados na tabela

2. correção; ``` INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "João",
  400000,
  "1949-04-18", 
  "male"
); ```

e) 
1. O valor para o compo de data não foi fornecido no formato correto entre "" logo o db realizou a subtração e então costatou que o valor resultante não corresponde ao campo de data.

2. correção: ``` INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
); ```

f) mais dois autores ``` INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Omar sy",
  8000000,
  "1978-01-20", 
  "male"
), (
  "007", 
  "Clotilde Hesme",
  10000000,
  "1979-07-30", 
  "female"
); ```

---
### Exercício 3

a) ``` SELECT * FROM Actor WHERE gender = "female"; ```

b) ``` SELECT salary FROM Actor WHERE name = "Tony Ramos"; ```

c) Como não existe um valor na coluna gender com o valor invalid a query não retorna nada.

d) ``` SELECT id, name, salary FROM Actor WHERE salary <= 500000; ```

e) 
1. o erro ocorre porque nome não é uma coluna da tabela, o correto seria name.

2. correção: ``` SELECT id, name from Actor WHERE id = "002" ```

---
### Exercício 4
a) estamos pegando todas as colunas da tabela Actor cujo os nome começam com a Letra A ou J e com salário maior que 300.000.

b) ``` SELECT  * FROM Actor 
WHERE NOT name LIKE "A%" AND  salary > 350000; ```

c) ``` SELECT  * FROM Actor 
WHERE (name LIKE "%G%" OR  name like "%g%"); ```

d) ``` SELECT * FROM Actor
WHERE
  (
    name LIKE "%G%"
    OR name LIKE "%g%"
    OR name LIKE "%A%"
    OR name LIKE "%a%"
  ) AND salary BETWEEN 350000
  AND 900000; ```

---
### Exercício 5
a) estamos criando uma nova tabela com as colunas id, name, sinopse, release date, assessment. Muito semelhante a tabela de atores, a principal diferença aqui está na sinopse que usa o tipo TEXT que basicamente consegue armazenas mais caracteres que o CHAR e o VARCHAR, porém o TEXT é um pouco mais lento pois o DB não salva na memória principal e sim em arquivos.

---
### Exercício 6
a) ``` SELECT id, title, sinopse FROM Films WHERE id = "002"; ```
b) ``` SELECT * FROM Films WHERE title LIKE  "%ce%" OR sinopse LIKE "%ce%"; ```

c) ``` SELECT id, title, sinopse FROM Films WHERE assessment >= 7; ```

---
### Exercício 7
a) ``` SELECT * FROM Films WHERE title LIKE  "%vida%"; ```

b) ``` SELECT * FROM Films WHERE title LIKE  "%Tropa%" OR sinopse LIKE "%Tropa%"; ``` 

c) ``` SELECT  * FROM Films WHERE releaseDate < "2010-10-20"; ```

d) ``` SELECT  * FROM Films WHERE releaseDate < "2010-10-20" AND (title LIKE  "%Tropa%" OR sinopse LIKE "%Tropa%") AND assessment >= 7; ```
