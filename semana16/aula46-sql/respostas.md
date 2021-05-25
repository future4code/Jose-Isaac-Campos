### Exercício 01
---
a) altera a tabela de Actor deletando a coluna salary.

b) altera a tabela de Actor mudando o nome da coluna gender para sex e define que ela agora é um VARCHAR de até 6 caracteres.

c) altera a tabela de Actor mais dessa vez apenas definindo o gender para um VARCHAR de 255.

d) ``` ALTER TABLE Actor CHANGE gender gender VARCHAR(100); ```

<br>

### Exercício 02
---
a) ``` UPDATE Actor
SET name = "Moacyr Franco", birth_date = curdate()
WHERE id = "003"; ```

b) ``` UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes"; ``` ```
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES"; ```

c) ``` UPDATE Actor
SET 
		name = "Isaac",
		birth_date = "1998-10-31",
    salary = 0,
    gender = "male"
WHERE id = "005";

d) ``` UPDATE Actor
SET name = "Moacyr Franco", birth_date = curdate()
WHERE id = "020"; ``` ele executou como não achou o id simplismente não fez nada.

<br>

### Exercício 03
---
a) ``` DELETE FROM Actor WHERE name = "Fernanda Montenegro" ```

b) ``` DELETE FROM Actor
WHERE gender = 'male' and salary > 1000000.00; ```

<br>

### Exercício 04
---
a) ``` SELECT MAX(salary) FROM Actor; ```

b) ``` SELECT MIN(salary) FROM Actor WHERE gender = 'female'; ```

c) ``` SELECT COUNT(*) FROM Actor WHERE gender = 'female'; ```

d) ``` SELECT SUM(salary) FROM Actor; ```

<br>

### Exercício 05
---
a) O comando realiza a contagem de quantas linhas existem e depois agrupa os dados com relação a coluna gender.

b) ``` SELECT id, name
FROM Actor
ORDER BY name desc; ```

c) ``` SELECT *
FROM Actor
ORDER BY salary; ```

d) ``` SELECT *
FROM Actor
ORDER BY salary desc
LIMIT 3; ```

e) ``` SELECT AVG(salary) FROM Actor
GROUP BY gender; ```

<br>

### Exercício 06
---
a) ``` ALTER TABLE Films
ADD playing_limit_date DATE NOT NULL; ```

b) ``` ALTER  TABLE Films
CHANGE assessment assessment FLOAT NOT NULL; ```

c) ``` UPDATE Films
SET Films.playing_limit_date = CURDATE()
WHERE id = 1; ``` ``` UPDATE Films
SET Films.playing_limit_date = '2021-02-22'
WHERE id = 2; ``` 

d) deletei o filme do id igual a 1 e quando fiz o update da sinopse o itém que estava com id igual a 2 tinha virado o um e assim até o ultimo itém. Logo o itém que estáva com id 2 antes de deletar ficou com a nova sinopse.

<br>

### Exercício 07
---
a) ``` SELECT * FROM Films
WHERE playing_limit_date >= CURDATE() AND assessment > 7.5; ```

b) ``` SELECT AVG(assessment) FROM Films; ```

c) ``` SELECT COUNT(*) FROM Films
WHERE playing_limit_date >= curdate(); ```

d) ``` SELECT COUNT(*) FROM Films
WHERE releaseDate >= curdate(); ```

e) ``` SELECT MAX(assessment) FROM Films; ```

f) ``` SELECT MIN(assessment) FROM Films; ```

<br>

### Exercício 08
---
a) ``` SELECT  * FROM Films
ORDER BY title ASC ; ```

b) ``` SELECT  * FROM Films
ORDER BY title DESC
LIMIT  5; ```

c) ``` SELECT  * FROM Films
ORDER BY playing_limit_date DESC
LIMIT  3; ```

d) ``` SELECT * FROM Films
ORDER BY assessment DESC
LIMIT  3; ```
