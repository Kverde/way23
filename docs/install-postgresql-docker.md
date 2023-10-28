---
title: "Установка базы данных PostgreSQL внутри Docker"
date: "2023-10-29"
categories:
  - "Базы данных"
  - "Docker"
tags:
  - "PostgreSQL"
---

# {{ $frontmatter.title }}

Для установки PostgreSQL внутри Docker лучше всего использовать либо сразу Linux, либо Linux на виртуальной машине. Дальнейшая инструкция подразумевает установку на виртуальную машину, на хосте используется Linux.

Установите [Debain на виртуальную машину](debian-server-install-vb.md). В дальнейшем для ссылки на эту виртуальную машину будем использовать имя `debian-server`, оно же будет `hostname` виртуальной машины.

[Установите Docker](https://docs.docker.com/desktop/install/debian/) на `debian-server`.

На `debian-server` запустите команду для запуска контейнера с PostgreSQL. Параметры `POSTGRES_PASSWORD`, `POSTGRES_USER` и `POSTGRES_DB` можете установить свои.

```
docker run -d \
       --name pg \
       -e POSTGRES_PASSWORD=12345 \
       -e POSTGRES_USER=user \
       -e POSTGRES_DB=mydb \
       -v pg_volume:/var/lib/postgresql/data \
       -p 5432:5432 \
       --restart=always \
       postgres
```

Теперь на `debian-server` находится контейнер с установленной базой данных. База данных доступна на порту 5432 виртуальной машины. Параметр `--restart=always` заставляет докер автоматически запускать контейнер после перезагрузки системы.

Установите DBeaver на хост и [подключитесь через него](dbeaver-connect-pg.md) к базе данных. В качестве `hostname` используйте имя виртуальной машины, `port` — 5332, другие данные из команды запуска контейнера выше.