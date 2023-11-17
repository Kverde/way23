---
title: "Создание дампа PostgreSQL"
date: "2023-11-17"
categories:
  - "Базы данных"
tags:
  - "PostgreSQL"
---

# {{ $frontmatter.title }}

Для того, чтобы создать дамп PostgreSQL достаточно вызвать команду `pg_dump`, она вернет в `stdout` sql-скрипт, воссоздающий текущее состояние базы данных. Если имя пользователя системы отлично от имени пользователя БД, то его нужно указать через параметр `-U`.

```bash
pg_dump -U postgres > dump.sql
```

Можно сразу сжать дамп, чтобы он занимал меньше места.

```bash
pg_dump -U postgres | gzip > dump.sql.gz
```

Если же нужно создать дамп базы данных в контейнере Docker, то это можно сделать через команду `docker exec`.

```bash
docker exec container-db pg_dump -U postgres | gzip > dump.sql.gz
```

Чтобы восстановить базу из дампа достаточно выполнить sql-скрипт. Для этого можно использовать команду `psql`. Параметр `-U` так же определяет пользователя базы данных, а параметр `-d` базу данных.

```bash
psql -U user -d mydb < proofreader_dump.sql 
```

## Ссылки

* [Документация postgrespro: Резервное копирование и восстановление](https://postgrespro.ru/docs/postgresql/12/backup-dump#backup-dump-restore)
* [Документация postgrespro: pg_dump](https://postgrespro.ru/docs/postgresql/12/app-pgdump)