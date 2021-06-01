### Exercício 01
a) Uma chave estrangeira é uma forma de criamos uma relação entre tabelas onde um tabela referencia um id de outra tabela.

C) Retorna um erro informado que não possível adicionar uma nova linha devido a uma restrição de uma chave estrangeira.

d) ``` alter table Movies drop column assessment; ```

e) Retorna um erro informado que não é possível excluir devido uma restrição de uma chave estrangeira.

<br>

### Exercício 02
--- 
a) A MovieCast é uma tabela que serve de ligação para representar o relacionamento de N:M guardando a relação de cada actor com cada filme e vice - versa.

d) Retorna um erro informado que não é possível excluir devido uma restrição de uma chave estrangeira.

<br>

### Exercício 03
--- 
a) o operador on serve para informarmos como os dados das duas tabelas deve ser combinados.

b) ``` select Movies.id, title, rate from Movies
inner join Rating on Movies.id = Rating.fk_films_id; ``` 