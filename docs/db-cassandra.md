---
title: "Базы данных: Apache Cassandra"
date: "2025-01-06"
categories:
  - "Базы данных"
tags:
  - "Apache Cassandra"
  - "Колоночные БД"
---

# {{ $frontmatter.title }}

[Apache Cassandra](https://cassandra.apache.org) ([GitHub](https://github.com/apache/cassandra)) — колоночная база данных. Cassandra применяется для распределенных систем в которых требуется высокая скорость записи и менее высокие требования к чтению и агрегации данных. Cassandra направлена на OLTP.

Вместо SQL в Cassandra используется CQL (Cassandra Query Language) который очень похож на SQL.

## Запуск

Запустить Cassandra проще всего через [docker]https://hub.docker.com/_/cassandra).

```bash
docker run -d --name cassandra \
  -p 9042:9042 \
  cassandra:latest
```

## Пример на Python

Пример использования библиотеки [cassandra-driver](https://github.com/datastax/python-driver):

```python
from cassandra.cluster import Cluster
from uuid import uuid4

# Подключение к кластеру Cassandra с указанием порта
cluster = Cluster(['localhost'], port=9042)
session = cluster.connect()

# Создание ключевого пространства
session.execute("""
    CREATE KEYSPACE IF NOT EXISTS test_keyspace
    WITH REPLICATION = { 'class': 'SimpleStrategy', 'replication_factor': 1 }
""")

# Подключение к созданному ключевому пространству
session.set_keyspace('test_keyspace')

# Создание таблицы
session.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY,
        name text,
        age int
    )
""")

# Вставка данных
session.execute("""
    INSERT INTO users (id, name, age) VALUES (%s, %s, %s)
""", (uuid4(), 'Alice', 30))
session.execute("""
    INSERT INTO users (id, name, age) VALUES (%s, %s, %s)
""", (uuid4(), 'Bob', 25))

# Запрос данных
rows = session.execute("SELECT * FROM users")
for row in rows:
    print(f'ID: {row.id}, Name: {row.name}, Age: {row.age}')

# ID: e938b62d-fcfa-4da2-82ac-facea5bf3188, Name: Alice, Age: 30
#ID: 9ed6cd1b-d44b-4d28-b5ae-e900f83d42b4, Name: Bob, Age: 25

# Закрытие соединения
cluster.shutdown()
```

## Ссылки

* [Введение в фундаментальные принципы и основы Apache Cassandra: Cassandra Day Russia Workshop I](https://www.youtube.com/watch?v=Ae4GABykRoM)