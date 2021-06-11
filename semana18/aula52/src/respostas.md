### Exercício 01

a) o rounds representa um número que indica o custo de desempenho que queremos impor
para esse hash, já o salt é uma string aleatória que misturada a senha para evitar
que senhas iguais tenha o mesmo hash. O valor mais usado para o rounds é 12, isso pode
variar, mais o principal é que não seja um valor muito alto que prejudique a velocidade
e nem muito baixo que deixe a aplicação vulnerável.

### Exercício 02

a) o cadastro, pois para realizarmos a verificação no login a senha já deve estar
em hash no db.

d) não, pois como o endpoint valida o token, conseguimos buscar as informações
do usuário pelo id.
