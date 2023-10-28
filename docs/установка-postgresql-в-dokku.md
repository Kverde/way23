---
title: "Установка плагина PostgreSQL в Dokku"
date: "2017-09-11"
categories: 
  - "Базы данных"
tags: 
  - "dokku"
  - "postgresql"
---

# {{ $frontmatter.title }}

Внутри Dokku можно установить [PostgreSQL](https://www.postgresql.org/) с помощью [плагина](https://github.com/dokku/dokku-postgres). После установки появится возможность создавать базы данных, подключатся к ним, связывать БД с приложениями.

Запускаем команду установки

sudo dokku plugin:install https://github.com/dokku/dokku-postgres.git postgres

После установки создаем контейнер с БД, название можно выбрать любое, в примере название `testdb`

qqq@ubuntuserver:~$ dokku postgres:create testdb
       Waiting for container to be ready
       Creating container database
       Securing connection to database
=====> Postgres container created: testdb
=====> Container Information
       Config dir:          /var/lib/dokku/services/postgres/testdb/config
       Data dir:            /var/lib/dokku/services/postgres/testdb/data
       Dsn:                 postgres://postgres:761fa29964ads1scdc4ba39bd332462c5@dokku-postgres-testdb:5432/testdb
       Exposed ports:       -
       Id:                  e025333e1ee1ca3569c351d7cad1906e3755976f1bb68f21eac9e4cc9eca6f3a
       Internal ip:         112.13.0.2
       Links:               -
       Service root:        /var/lib/dokku/services/postgres/testdb
       Status:              running
       Version:             postgres:9.6.4

После создания контейнера выводится информация о нем. Для подключения понадобится информация из строки `Dsn`. Её формат:

`postgres://postgres:761fa29964ads1scdc4ba39bd332462c5@dokku-postgres-testdb:5432/testdb postgres://login:password@server:port/db`

Эту же информацию можно получить командой

dokku postgres:info testdb

Команда для получения списка всех созданных БД

dokku postgres:list

Для получения доступа к БД из вне необходимо пробросить порт. Это делается командой `expose`

qqq@ubuntuserver:~$ dokku postgres:expose testdb
-----> Service testdb exposed on port(s) \[container->host\]: 5432->2957

Настройки закончены, для подключения к БД устанавливаем [pgAdmin](https://www.pgadmin.org/). Добавляем сервер

![pgAdmin Добавление БД](images/1.png)

Заполняем название

![pgAdmin Добавление БД](images/2.png)

И параметры подключения.

![pgAdmin Добавление БД](images/3.png)

В поле **host name/address** нужно указать адрес сервера на котором расположен Dokku. **Port** - порт который был получен командой `expose`. **Database**, **user** и **password** - из строки dsn в описании контейнера.

После сохранения БД доступна в списке

![pgAdmin Подключение к БД](images/4.png)
