---
title: "Базы данных: EventStoreDB"
date: "2024-12-30"
categories:
  - "Базы данных"
tags:
  - "EventStoreDB"
  - "Ключ-значение"
  - "Event sourcing"
---

# {{ $frontmatter.title }}

[EventStoreDB](https://github.com/EventStore/EventStore) — база данных для хранения событий (изменений состояний объектов), например, для реализации шаблона [Event sourcing](https://microservices.io/patterns/data/event-sourcing.html).

Основные объекты EventStoreDB:

* Событие (event) — основной объект в котором хранятся данные. Событие имеет тип — группа событий имеющих одно назначение, например, `пополнение счёта`, `изменение данных` и подобные. Данные хранятся в виде набора байт (чаще всего json).
* Поток (stream) — объект к которому привязываются события. Это может быть некоторый общий объект вроде `application`, или же это может быть определенный объект с идентификатором такой как `user-123`.

Логически EventStoreDB представляет из себя key-value хранилище, где key это название потока, а value — список событий. Так же эту базу данных можно представить в виде последовательно добавляемых записей лога.

## Запуск

Запустить EventStoreDB проще всего через [docker](https://hub.docker.com/r/eventstore/eventstore).

```
docker run --name esdb -d -p 2113:2113 \
    eventstore/eventstore:latest --insecure --run-projections=All \
    --enable-atom-pub-over-http
```

## Event Store Navigator

EventStoreDB поддерживает web-интерфейс для администрирования. После запуска контейнера интерфейс будет доступен по адресу `localhost:2113`.

На вкладке `Stream Browser` можно увидеть недавно изменённые потоки и добавить событие в любой поток.

## Пример на Python

Пример использования библиотеки [esdbclient](https://github.com/pyeventsourcing/esdbclient):

```python
from esdbclient import EventStoreDBClient, NewEvent, StreamState

client = EventStoreDBClient(
    uri="esdb://localhost:2113?Tls=false"
)

event1 = NewEvent(
    type='PartProduced',
    data=b'{"count": "3"}'
)

event2 = NewEvent(
    type='PartProduced',
    data=b'{"count": "5"}'
)

client.append_to_stream(
    stream_name='machine-25',
    events=[event1, event2],
    current_version=StreamState.ANY
)

events = client.get_stream('machine-25')

print(list(event.data for event in events))
# [b'{"count": "3"}', b'{"count": "5"}']
```

## Ссылки

* [Плейлист EventStoreDB Training Series](https://www.youtube.com/playlist?list=PLWG5TK2D4U_Nb4rWdiQw2jNWYSaBm7lT_)