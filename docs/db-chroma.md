---
title: "Базы данных: Chroma"
date: "2025-01-02"
categories:
  - "Базы данных"
tags:
  - "Chroma"
  - "Векторные базы данных"
---

# {{ $frontmatter.title }}

[Chroma](https://www.trychroma.com) — векторная база данных. Векторные базы данных позволяют быстро выполнения операции над векторами: сравнение, преобразование. База данных работает следующим образом: на вход подаются исходные данные, исходные данные проходят преобразование через некоторую модель в вектора, полученные вектора хранятся в базе данных.

## Пример на Python

Пример использования библиотеки [chromadb](https://github.com/chroma-core/chroma):

```python
import requests
from bs4 import BeautifulSoup

from chromadb import Client

# загрузим несколько статей, чтобы подать их на вход модели

urls = [
    'https://way23.ru/linux-sed.html',
    'https://way23.ru/linux-cron.html',
    'https://way23.ru/crypto-cloud.html',
    'https://way23.ru/philosophy-meaning.html',
]

articles = []

for url in urls:
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    
    article = {}
    article['text'] = soup.get_text()
    article['url'] = url
    articles.append(article)

# Инициализация клиента ChromaDB
client = Client()

#создание коллекции
collection = client.get_or_create_collection(name="articles")

# Добавление статей в коллекцию
for article in articles:
    # В данном случае используется модель по умолчанию.
    # В этом примере текст преобразуется в вектор автоматически
    # можно сделать это вручную вызовом функций библиотеки
    collection.upsert(
        documents=[article['text']],
        metadatas=[{'url': article['url']}],
        ids=[article['url']]
    )

def recommend_articles(user_query):
    results = collection.query(
        query_texts=[user_query],
        n_results=2  # Количество рекомендуемых статей
    )
    return results

user_query = "как пользоваться Cryptomator"
results = recommend_articles(user_query)

print(results['ids'])
# [['https://way23.ru/crypto-cloud.html', 'https://way23.ru/linux-cron.html']]
```

## Ссылки

* [Векторные базы данных: мощный инструмент для современного анализа данных](https://www.youtube.com/watch?v=fiFew6nM7Hc)
* [Документация Chroma](https://docs.trychroma.com/docs/overview/introduction)