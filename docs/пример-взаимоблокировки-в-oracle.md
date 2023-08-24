---
title: "Пример взаимоблокировки в Oracle"
date: "2019-08-28"
categories: 
  - "Базы данных"
tags: 
  - "oracle"
---

# {{ $frontmatter.title }}

Взаимная блокировка двух сессий происходит когда сессии натыкаются на блокировку друг друга. Продемонстрировать такое поведение можно на таблице с двумя строками.

```sql
drop table test.emp;

create table test.emp
(
  rid  integer not null,
  name varchar2(100)
);

alter table test.emp
  add constraint table_pk primary key (rid);

insert into test.emp (rid, name) values (1, 'запись 1');
insert into test.emp (rid, name) values (2, 'запись 2');

commit;
```

Следующая последовательность запросов update приводит к взаимной блокировке.

<table class="wp-block-table aligncenter"><tbody><tr><td><strong>Сессия 1</strong></td><td><strong>Сессия 2</strong></td></tr><tr><td><code>update test.emp set name = '11' where rid = 1;</code></td><td></td></tr><tr><td></td><td><code>update test.emp set name = '22' where rid = 2;</code></td></tr><tr><td><code>update test.emp set name = '22' where rid = 2;</code></td><td></td></tr><tr><td><code>Сеанс зависает</code></td><td></td></tr><tr><td></td><td><code>update test.emp set name = '11' where rid = 1;</code></td></tr><tr><td></td><td><code>ORA-00060: взаимная блокировка при ожидании ресурса</code></td></tr></tbody></table>

Ошибка ORA-00060, как написано в документации, может появиться в случайной из этих сессий.

## Ссылки

- [Подробная статья про взаимоблокировки](http://citforum.ru/database/oracle/deadlock/2.shtml)
