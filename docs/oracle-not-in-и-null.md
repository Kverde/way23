---
title: "Oracle. not in и null"
date: "2019-04-15"
categories: 
  - "Базы данных"
tags: 
  - "sql"
  - "oracle"
---

# {{ $frontmatter.title }}

Если в колонке внутри подзапроса `not in` возможно появление `null` то это может привести к неверному поведению.

Рассмотрим пример, сделаем две таблицы:

```sql
create table test.table1 
  as select value v 
     from table(sys.odcinumberlist(1, 2, 3));

create table test.table2 
  as select value v 
     from table(sys.odcinumberlist(1, 3, null));
```

Запрос с `in` возвращает то что ожидается

```sql
select 
  t.value 
from 
  test.table1 t 
where 
  t.value in (select t.value from test.table2);
```

> 1 3

А вот запрос с `not in` не возвращает вообще ничего

```sql
select 
  t.value 
from 
  test.table1 t 
where 
  t.value not in (select t.value from test.table2);
```

И так будет всегда если в результате подзапроса присутствует `null`. Таким образом, если делается запрос с `not in`, всегда нужно проверить что колонка в подзапросе является `not null`. Или заменить условие, например на [not exists](https://asktom.oracle.com/pls/asktom/f?p=100:11:0::no::p11_question_id:442029737684).

[Подробная статья](https://habr.com/ru/post/127327/) про поведение `null` в Oracle, в том числе разобрана ситуация с `not in`.
