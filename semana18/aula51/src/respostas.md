### exercício 01

a) Sim, pois com string temos uma gama maior de caracteres que podem ser usados
para geração de ids únicos. Além de que ids com números sequencias podem deixar
mais vulneráveis os nossos endpoints.

### exercício 02

a) há a definição do connection com as informações de acesso ao banco de dados
e qual banco de dados o knex irá se conectar. Mais abaixo há uma função responsável
por criar um novo usuário no banco de dados.

b) `CREATE TABLE Aula51_User ( id varchar(36) primary key, email VARCHAR(255) UNIQUE NOT NULL, password VARCHAR(255) NOT NULL );`

### exercício 03

a) A tipagem do arquivo .env diz que o valor de JWT_KEY pode ser uma string caso
tenha ela definida no arquivo com um valor associado ou undefined caso ela não
esteja definida ou não tenha um valor associado a ela. Com o 'as string' estamos
dizendo paro o typescript que temos certeza que aquilo vira como string.
