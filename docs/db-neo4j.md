---
title: "Базы данных: Neo4j"
date: "2025-01-03"
categories:
  - "Базы данных"
tags:
  - "Neo4J"
  - "Графовые базы данных"
---

# {{ $frontmatter.title }}

[Neo4j](https://neo4j.com) — графовая база данных. В графовых базах данных объекты хранятся в виде узлов и связей между узлами. Объекты могут содержать данные, их можно представить в виде JSON объекта.

## Запуск

Запустить Neo4J проще всего через [docker](https://hub.docker.com/_/neo4j).

```
docker run \
    --name neo4j \
    --publish=7474:7474 --publish=7687:7687 \
    --volume=$HOME/neo4j/data:/data \
    --env=NEO4J_AUTH=none \
    -d \
    neo4j
```

Порт `7374` будет работать как HTTP API, а порт `7687` для Bolt API.

## Neo4j Browser

После запуска контейнера docker по адресу `http://localhost:7474/` будет доступен браузер.

## Язык запросов

Neo4J использует язык [Cypher](https://neo4j.com/docs/cypher-manual/current/introduction/) для запросов к базе данных. Cypher похож на SQL и предоставляет дополнительные возможности для выборки и изменения графов. Cypher декларативный язык которые описывает, что нужно вернуть, а не как базе данных нужно выбрать данные, это совпадает с SQL. Отличия Cypher в меньших возможностях проверки схемы данных. 

Пример запроса на SQL и аналогичного в Cypher:

```sql
SELECT movie.name
FROM movie
WHERE movie.rating > 7
```

```cypher
MATCH (movie:Movie)
WHERE movie.rating > 7
RETURN movie.title
```

Следующие примеры с использованием механизма сравнения шаблонов. Cypher позволяет избавится от соединений (join).

```sql
SELECT actors.name
FROM actors
 	LEFT JOIN acted_in ON acted_in.actor_id = actors.id
	LEFT JOIN movies ON movies.id = acted_in.movie_id
WHERE movies.title = "The Matrix"
```

```cypher
MATCH (actor:Actor)-[:ACTED_IN]->(movie:Movie {title: 'The Matrix'})
RETURN actor.name
```

## Пример на Python

Пример использования библиотеки [neo4j](https://pypi.org/project/neo4j/) ([GitHub](https://github.com/neo4j/neo4j-python-driver)):

```python
from neo4j import GraphDatabase, RoutingControl

URI = "neo4j://localhost:7687"

def add_friend(driver, name, friend_name):
    driver.execute_query(
        "MERGE (a:Person {name: $name}) "
        "MERGE (friend:Person {name: $friend_name}) "
        "MERGE (a)-[:KNOWS]->(friend)",
        name=name, friend_name=friend_name, database_="neo4j",
    )

def print_friends(driver, name):
    records, _, _ = driver.execute_query(
        "MATCH (a:Person)-[:KNOWS]->(friend) WHERE a.name = $name "
        "RETURN friend.name ORDER BY friend.name",
        name=name, database_="neo4j", routing_=RoutingControl.READ,
    )
    for record in records:
        print(record["friend.name"])

with GraphDatabase.driver(URI) as driver:
    add_friend(driver, "Arthur", "Guinevere")
    add_friend(driver, "Arthur", "Lancelot")
    add_friend(driver, "Arthur", "Merlin")
    print_friends(driver, "Arthur")

# Guinevere
# Lancelot
# Merlin
```

## Ссылки

* [Александр Морозов. Семантический поиск по аналитическим данным с помощью Python и Neo4j](https://www.youtube.com/watch?v=8yrPi-FHZp4)
* [Документация Neo4J](https://neo4j.com/docs/)