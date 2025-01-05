---
title: "Базы данных: ElasticSearch"
date: "2025-01-05"
categories:
  - "Базы данных"
tags:
  - "ElasticSearch"
  - "Поисковый движок"
---

# {{ $frontmatter.title }}

[ElasticSearch](https://www.elastic.co/elasticsearch) — поисковый движок, хранит документы, строит по ним индексы и позволяет быстро искать документы по набору условий. Под документом следует понимать набор полей по которым производится поиск. Индекс, в контексте ElasticSearch, не то же самое, что индекс в реляционной БД, а скорее именованная коллекция документов.

## Запуск

Запустить ElasticSearch проще всего через [docker](https://hub.docker.com/_/elasticsearch).

```
docker run -d --name elasticsearch \
    -p 9200:9200 -p 9300:9300 \
    -e "discovery.type=single-node" \
    -e "xpack.security.enabled=false" \
    elasticsearch:8.6.2
```

## Проверка работы

Для проверки работы обратитесь в браузере к порту `http://localhost:9200` или командой 

```bash
curl -X GET localhost:9200
```

В результате будет получен JSON с информацией о сервере:

```json
{
  "name" : "10fb6274b140",
  "cluster_name" : "docker-cluster",
  "cluster_uuid" : "NJx2y2iiSJizhkWQHA0zwg",
  "version" : {
    "number" : "8.6.2",
    "build_flavor" : "default",
    "build_type" : "docker",
    "build_hash" : "2d58d0f136141f03239816a4e360a8d17b6d8f29",
    "build_date" : "2023-02-13T09:35:20.314882762Z",
    "build_snapshot" : false,
    "lucene_version" : "9.4.2",
    "minimum_wire_compatibility_version" : "7.17.0",
    "minimum_index_compatibility_version" : "7.0.0"
  },
  "tagline" : "You Know, for Search"
}
```

## Пример на Python

Пример использования библиотеки [elasticsearch](https://github.com/elastic/elasticsearch-py):

```python
from elasticsearch import Elasticsearch

# Подключение к Elasticsearch
es = Elasticsearch("http://debian-server:9200")

# Проверка подключения
if not es.ping():
    print("Elasticsearch не доступен!")
else:
    print("Подключение к Elasticsearch успешно!")

# Создание нового индекса
index_name = "my_documents3"
try:
    es.indices.create(index=index_name)
    print(f"Индекс '{index_name}' успешно создан.")
except Exception as e:
    print(f"Индекс уже существует или произошла ошибка: {e}")

# Добавление документов с разнообразным английским текстом
documents = [
    {"title": "Document 1", "content": "The quick brown fox jumps over the lazy dog."},
    {"title": "Document 2", "content": "Artificial intelligence is transforming the world."},
    {"title": "Document 3", "content": "The universe is vast and full of mysteries."},
    {"title": "Document 4", "content": "Cooking is an art that requires creativity and passion."},
    {"title": "Document 5", "content": "Traveling opens your mind to new cultures and experiences."},
]

for i, doc in enumerate(documents):
    es.index(index=index_name, id=i, document=doc)

print("Документы добавлены!")

# Явный вызов refresh для обновления индекса
es.indices.refresh(index=index_name)

# Проверка количества документов в индексе
doc_count = es.count(index=index_name)['count']
print(f"Количество документов в индексе '{index_name}': {doc_count}")

# Поиск документов
search_query = {
    "match": {
        "content": "art"  # Ищем слово "art"
    }
}

response = es.search(index=index_name, body={"query": search_query})

print("Результаты поиска:")
for hit in response['hits']['hits']:
    print(f"ID: {hit['_id']}, Title: {hit['_source']['title']}, Content: {hit['_source']['content']}")
```

Ввод программы:

```
Подключение к Elasticsearch успешно!
Индекс 'my_documents3' успешно создан.
Документы добавлены!
Количество документов в индексе 'my_documents3': 5
Результаты поиска:
ID: 3, Title: Document 4, Content: Cooking is an art that requires creativity and passion.
```

## Ссылки

* [ElasticSearch: Всё, что нужно знать за 30 минут](https://www.youtube.com/watch?v=vxE1aGTEnbE)
* [Основы работы с Elasticsearch](https://doka-guide.vercel.app/tools/elasticsearch/) — пример на NodeJS
* [Плейлист ElasticSearch для самых маленьких python-разработчиков](https://www.youtube.com/playlist?list=PLlKID9PnOE5jzJmRYfY0Rs1axrlH4-Qe_)