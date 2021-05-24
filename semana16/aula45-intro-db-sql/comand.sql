SHOW DATABASES;

SHOW TABLES;

DESCRIBE Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

SELECT  * FROM Actor;

INSERT INTO  Actor (id, name, salary, birth_date, gender)
VALUES(
  "002",
  "Glória Pires",
  1200000,
  "1963-08-23",
  "female"
);

INSERT INTO  Actor (id, name, salary, birth_date, gender)
VALUES(
  "002",
  "Newton",
  300000,
  "1643-01-04",
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "João",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);


INSERT INTO Actor (id, name, salary, birth_date, gender)
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
);


-- filmes

INSERT  INTO Films (id, title, sinopse, releaseDate, assessment)
VALUES(
  "002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",
  "2012-12-27",
  10
),
(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02",
  8
),
(
  "004",
  "Tropa de Elite",
  "Em Tropa de Elite, o dia-a-dia do grupo de policiais e de um capitão do BOPE (Wagner Moura), que quer deixar a corporação e tenta encontrar um substituto para seu posto. Paralelamente dois amigos de infância se tornam policiais e se destacam pela honestidade e honra ao realizar suas funções, se indignando com a corrupção existente no batalhão em que atuam.",
  "2007-10-05",
  10
);