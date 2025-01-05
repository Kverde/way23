---
title: "Базы данных: Blazegraph"
date: "2025-01-05"
categories:
  - "Базы данных"
tags:
  - "Blazegraph"
  - "RDB БД"
---

# {{ $frontmatter.title }}

[Blazegraph](https://blazegraph.com) — [RDF](https://ru.wikipedia.org/wiki/Resource_Description_Framework)-хранилище.

## Запуск

Запустить Blazegraph проще всего через [docker](https://hub.docker.com/r/islandora/blazegraph).

```
docker run -d --name blazegraph \
    -p 9999:8080 \
    islandora/blazegraph:3.4
```

## Blazegraph Workbench

Blazegraph предоставляет Blazegraph Workbench для работы с базой данных по адресу `http://debian-server:9999/bigdata/`.

Для запросов в Blazegraph используется язык [SPARQL](https://ru.wikipedia.org/wiki/SPARQL).

## Пример на Python

Пример использования библиотеки [RDFLib](https://github.com/RDFLib/rdflib?ysclid=m5jpcuzux8154274842) ([документация](https://rdflib.readthedocs.io/en/stable/)):

```python
import requests
from rdflib import Graph, URIRef, Literal, Namespace

# URL вашего экземпляра Blazegraph
BLAZEGRAPH_URL = 'http://debian-server:9999/bigdata/namespace/kb/sparql'

# Определение пространства имен
EX = Namespace("http://example.org/")

# Создание графа
g = Graph()

# Добавление осмысленных данных о книгах
g.add((EX.book1, EX.title, Literal("The Great Gatsby")))
g.add((EX.book1, EX.author, Literal("F. Scott Fitzgerald")))
g.add((EX.book1, EX.year, Literal(1925)))

g.add((EX.book2, EX.title, Literal("To Kill a Mockingbird")))
g.add((EX.book2, EX.author, Literal("Harper Lee")))
g.add((EX.book2, EX.year, Literal(1960)))

g.add((EX.book3, EX.title, Literal("The Road")))
g.add((EX.book3, EX.author, Literal("Cormac McCarthy")))
g.add((EX.book3, EX.year, Literal(2006)))

g.add((EX.book4, EX.title, Literal("The Catcher in the Rye")))
g.add((EX.book4, EX.author, Literal("J.D. Salinger")))
g.add((EX.book4, EX.year, Literal(1951)))

# Сериализация графа в формат N-Triples
data = g.serialize(format='nt')

# Вставка данных в Blazegraph
insert_query = f"""
INSERT DATA {{
    {data}
}}
"""

# Выполнение запроса на вставку данных
response = requests.post(BLAZEGRAPH_URL, data={'update': insert_query})

# Проверка статуса ответа
if response.status_code == 200:
    print("Данные успешно вставлены.")
else:
    print(f"Error: {response.status_code}, {response.text}")

# Выполнение SPARQL-запроса с условием (книги, опубликованные после 2000 года)
query = """
SELECT ?title ?author ?year
WHERE {
  ?book <http://example.org/title> ?title .
  ?book <http://example.org/author> ?author .
  ?book <http://example.org/year> ?year .
  FILTER(?year > 2000)
}
"""

# Выполнение запроса
response = requests.get(BLAZEGRAPH_URL, params={'query': query, 'format': 'json'})

# Проверка статуса ответа
if response.status_code == 200:
    results = response.json()
    print("Результаты запроса (книги, опубликованные после 2000 года):")
    for result in results["results"]["bindings"]:
        print(f"Title: {result['title']['value']}, Author: {result['author']['value']}, Year: {result['year']['value']}")
else:
    print(f"Error: {response.status_code}, {response.text}")
```

Ввод программы:

```
Данные успешно вставлены.
Результаты запроса (книги, опубликованные после 2000 года):
Title: The Road, Author: Cormac McCarthy, Year: 2006
```