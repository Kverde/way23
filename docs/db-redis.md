---
title: "Базы данных: Redis"
date: "2024-12-14"
categories:
  - "Базы данных"
tags:
  - "Redis"
  - "Ключ-значение"
---

# {{ $frontmatter.title }}

[Redis](https://redis.io) — резидентная (находящаяся всегда в оперативной памяти) база данных типа «ключ — значение». Принцип работы: ключ (строка) связывает с данными определённого типа. Значения привязанное к ключу можно запросить, изменить или удалить. Redis часто используется для кеширования.

Redis поддерживает несколько типов данных, некоторые из них:

* `String` — основной тип данных, последовательность байт. Может содержать строки, числа, HTML или JSON.
* `List` — упорядоченная коллекция;
* `Set` — неупорядоченная уникальная коллекция;
* `Hash` — словарь, коллекция объектов ключ-значение.

Кроме встроенных типов данных есть возможность подключения расширений с другими типами данных.

## Запуск

Запустить Redis проще всего через docker.

```
docker run --name my-redis -p 6379:6379 -d redis
```

## Redis-cli

Redis-cli — консольная утилита для подключения к Redis и выполнения команд. Если Redis запущена через docker то запускается redis-cli следующей командой:

```
docker exec -it my-redis redis-cli
```

## Команды Redis

Для работы с каждом типом данных Redis предоставляет определённый [набор команд](https://redis.io/docs/latest/commands/).

Примеры команд:

* `Strings`:
  * `SET`: Связывает ключ со значением
  * `GET`: Возвращает значение по ключу
  * `INCR`/`DECR`: Интерпретирует значение как число и увеличивает/уменьшает число на единицу 
* `Lists`:
  * `LPUSH`/`RPUSH`: Добавляет одно или несколько значений к ключу
  * `LRANGE`: Возвращает диапазон элементов из списка
  * `LPOP`/`RPOP`: Удаляет и возвращает первый или последний элемент списка

Примеры использования команд через `redis-cli`:

```redis-cli
127.0.0.1:6379> set fruit mango
OK
127.0.0.1:6379> get fruit
"mango"
127.0.0.1:6379> set n 4
OK
127.0.0.1:6379> incr n
(integer) 5
127.0.0.1:6379> get n
"5"
127.0.0.1:6379> 
```

```redis-cli
127.0.0.1:6379> lpush people bob
(integer) 1
127.0.0.1:6379> lpush people john
(integer) 2
127.0.0.1:6379> lrange people 0 1
1) "john"
2) "bob"
127.0.0.1:6379> rpush people marta
(integer) 3
127.0.0.1:6379> lrange people 0 2
1) "john"
2) "bob"
3) "marta"
127.0.0.1:6379> lpop people
"john"
127.0.0.1:6379> lrange people 0 1
1) "bob"
2) "marta"
127.0.0.1:6379> 
```

## Пример на Python

Пример использования библиотеки [redis-py](https://github.com/redis/redis-py):

```
import redis

r = redis.Redis(host='redis-host', port=6379, decode_responses=True)

r.set('counter', 100)
r.incr('counter')
r.incr('counter')
counter = r.get('counter')
print(counter) # 102
```