SELECT
  *
FROM
  Actor
WHERE
  gender = "female";
SELECT
  salary
FROM
  Actor
WHERE
  name = "Tony Ramos";
SELECT
  *
FROM
  Actor
WHERE
  gender = "invalid";
SELECT
  id,
  name,
  salary
FROM
  Actor
WHERE
  salary <= 500000;
SELECT
  id,
  name
from
  Actor
WHERE
  id = "002";
SELECT
  *
FROM
  Actor
WHERE
  (
    name LIKE "A%"
    OR name like "J%"
  )
  AND salary > 300000;
SELECT
  *
FROM
  Actor
WHERE
  NOT name LIKE "A%"
  AND salary > 350000;
SELECT
  *
FROM
  Actor
WHERE
  (
    name LIKE "%G%"
    OR name like "%g%"
  );

SELECT * FROM Actor
WHERE
  (
    name LIKE "%G%"
    OR name LIKE "%g%"
    OR name LIKE "%A%"
    OR name LIKE "%a%"
  ) AND salary BETWEEN 350000
  AND 900000;