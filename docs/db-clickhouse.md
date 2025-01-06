---
title: "Базы данных: ClickHouse"
date: "2025-01-05"
categories:
  - "Базы данных"
tags:
  - "ClickHouse"
  - "Колоночные БД"
---

# {{ $frontmatter.title }}

[ClickHouse](https://clickhouse.com) ([GitHub](https://github.com/ClickHouse/ClickHouse)) — колоночная база данных. ClickHouse используется для больших хранилищ данных для ускорения аналитических запросов. 
 
## Запуск

Запустить ClickHouse проще всего через [docker](https://hub.docker.com/r/clickhouse/clickhouse-server/).

```bash
docker run -d --name clickhouse-server \
  -p 8123:8123 \
  -p 9000:9000 \
  --ulimit nofile=262144:262144 \
  yandex/clickhouse-server
```

## clickhouse-client

ClickHouser предоставляет консольную программу для управления базой данных [clickhouse-client](https://clickhouse.com/docs/en/integrations/sql-clients/cli).

Для запуска в контейнере docker Наберите команду

```bash
docker exec -it clickhouse-server clickhouse-client
```

Пример работы. Создаём базу данных:

```
b0e4b554a392 :) CREATE DATABASE IF NOT EXISTS newdb;

CREATE DATABASE IF NOT EXISTS newdb

Query id: 5b5867ab-ab57-4bd5-a902-78e7a1b75fd9

Ok.

0 rows in set. Elapsed: 0.023 sec. 

b0e4b554a392 :) USE newdb;
```

Подключается к базе данных:

```
USE newdb

Query id: 62ba7f5f-9479-4734-bad8-27b2563028fe

Ok.

0 rows in set. Elapsed: 0.003 sec.

```

Создаём таблицу в базе данных:

```
b0e4b554a392 :) CREATE TABLE user (
                    id UInt32,
                    name String,
                    created_at DateTime
                ) ENGINE = MergeTree()
                ORDER BY id;

CREATE TABLE user
(
    `id` UInt32,
    `name` String,
    `created_at` DateTime
)
ENGINE = MergeTree
ORDER BY id

Query id: cd391f57-f554-4033-b733-aab58a3d2513

Ok.

0 rows in set. Elapsed: 0.029 sec. 
```

Выводим все таблицы в базе данных:

```
b0e4b554a392 :) SHOW TABLES;

SHOW TABLES

Query id: b9678529-dcd8-478f-92eb-406487b29094

┌─name─┐
│ user │
└──────┘

1 rows in set. Elapsed: 0.009 sec.
```

## Пример на Python

Пример использования библиотеки [clickhouse-driver](https://github.com/mymarilyn/clickhouse-driver) ([документация](https://clickhouse-driver.readthedocs.io/en/latest/)):

```python
from clickhouse_driver import Client

# Создаем подключение к ClickHouse
client = Client('debian-server', port=9000)  # Замените 'localhost' на адрес вашего сервера ClickHouse

# Создаем таблицу (если она еще не существует)
client.execute('''
CREATE TABLE IF NOT EXISTS test_table (
    id UInt32,
    name String,
    age UInt8
) ENGINE = MergeTree()
ORDER BY id
''')

# Добавляем данные в таблицу
data = [
    (1, 'Alice', 30),
    (2, 'Bob', 25),
    (3, 'Charlie', 35)
]

client.execute('INSERT INTO test_table (id, name, age) VALUES', data)

# Выбираем данные из таблицы
result = client.execute('SELECT * FROM test_table')

# Выводим результаты
for row in result:
    print(row)

# Закрываем соединение (необязательно, так как клиент автоматически закрывает соединение при завершении работы)
client.disconnect()
```

Ввод программы:

```
(1, 'Alice', 30)
(2, 'Bob', 25)
(3, 'Charlie', 35)
```

## Ссылки

* [Что нужно знать об архитектуре ClickHouse / Алексей Зателепин (Яндекс)](https://www.youtube.com/watch?v=PLMSA_gDdyM)