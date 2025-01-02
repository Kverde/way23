---
title: "Базы данных: Prometheus"
date: "2025-01-02"
categories:
  - "Базы данных"
tags:
  - "Prometheus"
  - "Time-series database"
---

# {{ $frontmatter.title }}

[Prometheus](https://prometheus.io) — база данных типа Time-series database.

Базу данных типа Time-series database можно представить как хранилище для набора key-value в котором ключом будет время, а значением некоторый показатель метрики. Однако, таким образом различные метрики перепутались бы, поэтому временные последовательности (последовательности ключей-времени) группируются по названиям метрики.

Метрики могут быть нескольких типов: 

* Counter — может только увеличиваться 
* Gauge — может уменьшаться и увеличиваться

## Запуск

Запустить Prometheus проще всего через docker. Придется поднять два контейнера: [Prometheus](https://hub.docker.com/r/prom/prometheus) и [Pushgateway](https://hub.docker.com/r/prom/pushgateway). Второй нужен чтобы отправлять в Prometheus метрики по http.

Создайте файл `prometheus.yml`:

```yaml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'pushgateway'
    static_configs:
      - targets: ['pushgateway:9091']
```

```bash
docker network create prometheus-network

docker run -d --name pushgateway --network prometheus-network -p 9091:9091 prom/pushgateway

docker run -d --name prometheus --network prometheus-network -p 9090:9090 -v $(pwd)/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus --config.file=/etc/prometheus/prometheus.yml
```

При такой конфигурации Prometheus будет забирать метрики из Pushgateway каждые 15 секунд.

## Web-интерфейс

Prometheus поддерживает web-интерфейс для администрирования. После запуска контейнера интерфейс будет доступен по адресу `localhost:9090`.

## Пример на Python

Пример использования библиотеки [esdbclient](https://github.com/pyeventsourcing/esdbclient):

```python
from prometheus_client import Counter, push_to_gateway

counter = Counter('errors', 'Errors in my app')

while True:
    counter.inc()
    push_to_gateway('localhost:9091', job='my_job', registry=None)
    input()
```

Pushgateway не хранит значения метрик, поэтому их значение нужно сохранять в приложении.

## Ссылки

* [Плейлист Prometheus Fundamentals](https://www.youtube.com/playlist?list=PLyBW7UHmEXgylLwxdVbrBQJ-fJ_jMvh8h)
* [When to use the Pushgateway](https://prometheus.io/docs/practices/pushing/)
* [GutHub Prometheus](https://github.com/prometheus/prometheus)
* [GutHub Pushgateway](https://github.com/Prometheus/pushgateway)