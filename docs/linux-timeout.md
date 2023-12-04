---
title: "Команда timeout в Linux"
date: "2023-12-04"
categories:
  - "Linux"
tags:
  - "timeout"
---

# {{ $frontmatter.title }}

Команда `timeout` запускает другую команду и если другая команда все ещё выполняется через заданное время, то завершает её выполнение. Первый параметр — время выполнения, следующие параметры — название команды и параметры команды.

```bash
user@debian-server:~/test$ timeout 5s ping google.com
PING google.com (108.177.14.100) 56(84) bytes of data.
64 bytes from lt-in-f100.1e100.net (108.177.14.100): icmp_seq=1 ttl=55 time=42.2 ms
64 bytes from lt-in-f100.1e100.net (108.177.14.100): icmp_seq=2 ttl=55 time=42.5 ms
64 bytes from lt-in-f100.1e100.net (108.177.14.100): icmp_seq=3 ttl=55 time=42.2 ms
64 bytes from lt-in-f100.1e100.net (108.177.14.100): icmp_seq=4 ttl=55 time=42.7 ms
64 bytes from lt-in-f100.1e100.net (108.177.14.100): icmp_seq=5 ttl=55 time=42.3 ms
```

Команда начинает выполнятся сразу после выполнения и если закончится до таймаута, то просто ничего дополнительно не произойдет.

```bash
user@debian-server:~/test$ timeout 3s echo test
test
```

Время можно указать в секундах (`s`), минутах (`m`), часах (`h`) и днях (`d`).