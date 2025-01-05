---
title: "Базы данных: MongoDB"
date: "2025-01-05"
categories:
  - "Базы данных"
tags:
  - "MongoDB"
  - "Документная БД"
---

# {{ $frontmatter.title }}

[MongoDB](https://www.mongodb.com) — документная база данных. Данные хранятся в виде коллекций (аналог таблиц в реляционной БД) и документов (аналог строк таблицах в реляционной БД). Документы — JSON объекты.

## Запуск

Запустить MongoDB проще всего через [docker](https://www.mongodb.com/resources/products/compatibilities/docker).

```
docker run -d --name mongodb \
    -p 27017:27017 \
    mongodb/mongodb-community-server:latest
```

## MongoDB Shell (mongosh)

MongoDB содержит консольное приложение для управление базой данных [MongoDB Shell](https://www.mongodb.com/docs/mongodb-shell/).
 
Для запуска MongoDB Shell внутри контейнера введите

```bash
docker exec -it mongodb mongosh
```

Пример использования:

```mongosh
test> show dbs
admin   40.00 KiB
config  12.00 KiB
local   40.00 KiB
test> use mydb
switched to db mydb
mydb> db.users.insertMany([
... { name: "Mike", age: 19, verified: true },
... { name: "Bob", age: 31, email: "bob@gmail.com" }
... ])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('677a772ab01230826d567a2b'),
    '1': ObjectId('677a772ab01230826d567a2c')
  }
}
mydb> db.users.find()
[
  {
    _id: ObjectId('677a772ab01230826d567a2b'),
    name: 'Mike',
    age: 19,
    verified: true
  },
  {
    _id: ObjectId('677a772ab01230826d567a2c'),
    name: 'Bob',
    age: 31,
    email: 'bob@gmail.com'
  }
]
```

## Пример на Python

Пример использования библиотеки [pymongo](https://github.com/mongodb/mongo-python-driver ([документация](https://pymongo.readthedocs.io/en/stable/))):

```python
from pymongo import MongoClient

# Подключаемся к MongoDB (по умолчанию на localhost:27017)
client = MongoClient('debian-server', 27017)

# Создаем базу данных
db = client['mydatabase']

# Создаем коллекцию
collection = db['mycollection']

# Вставляем документ в коллекцию
document = {
    'name': 'Alice',
    'age': 30,
    'city': 'New York'
}
collection.insert_one(document)

# Извлекаем документ из коллекции
result = collection.find_one({'name': 'Alice'})

# Выводим результат
print(result)

# Закрываем соединение
client.close()
```

Ввод программы:

```
{'_id': ObjectId('677a8e6b91551c7424c1c6c0'), 'name': 'Alice', 'age': 30, 'city': 'New York'}
```

## Ссылки

* [MongoDB: Все, что нужно знать за 30 минут](https://www.youtube.com/watch?v=xDNxTbwKROo)
* [MongoPlayground.net](https://mongoplayground.net)
* [Развенчиваем мифы о MongoDB. Павел Перекалов](https://www.youtube.com/watch?v=HdYAQC69Kg0)
* [Петр Зайцев — MySQL и MongoDB - когда что лучше использовать?](https://www.youtube.com/watch?v=AJNvjctEj6c)
* [Остаться в живых. Крупный проект на одной NoSQL / Айк Саргсян (Юла)](https://www.youtube.com/watch?v=ZLOFOxsDJIY)