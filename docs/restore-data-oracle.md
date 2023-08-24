---
title: "Как восстановить удаленные данные из Oracle?"
date: "2022-02-07"
categories: 
  - "Базы данных"
tags: 
  - "Oracle"
---

# {{ $frontmatter.title }}

Способы восстановления данных в БД Oracle после фиксации (commit).

## Ретроспективный запрос

Ретроспективный запрос позволяет восстановить недавно удалённые данные. Данные будут выведены на указанное в запросе время. Время доступности старых данных зависит от настроек базы данных.

```
select 
  count(*) 
from 
  tablename as of timestamp to_timestamp('2004-03-29 13:34:12', 'YYYY-MM-DD HH24:MI:SS');
```

Ретроспективный запрос [не может быть использован](https://docs.oracle.com/cd/E11882_01/appdev.112/e41502/adfns_flashback.htm#ADFNS1010) со следующими типами данных: 

- BFILE
- BLOB
- CLOB
- NCLOB

### Ссылки

- [Flashback Query (AS OF) in Oracle Database 10g](https://oracle-base.com/articles/10g/flashback-query-10g)

## Восстановление таблицы из корзины

Если таблица была полностью удалена (drop), то есть возможность восстановить её из корзины.

Для этого найдите таблицу в корзине

```
select 
  *
from
  dba_recyclebin t
where 
  original_name = 'table_name'
```

Возьмите название таблицы в корзине из колонки **OBJECT_NAME** и восстановить таблицу командой 

```
flashback table 
  owner."BIN$2vv3nR/wSHyzgnIdqcBGJA==$0" 
to before drop 
rename to new_table_name;
```

### Ссылки

- [Flashback table](https://docs.oracle.com/cd/B19306_01/server.102/b14200/statements_9012.htm)