---
title: "Копирование файлов по ssh и из контейнера Docker"
date: "2023-11-17"
categories:
  - "Linux"
tags:
  - "ssh"
  - "Docker"
---

# {{ $frontmatter.title }}

## SSH

Чтобы скопировать файл по ssh применяется команда `scp`. `scp` позволяет скопировать файл на удалённую машину и с удалённой машины. Чтобы скопировать файл на удаленную машину первым аргументом укажите путь к файлу, а вторым сервер, на который нужно подключится, и целевой путь.

```bash
scp ./myfile.txt user@server:/home/user/
```

Чтобы скопировать файл с удаленной машину, наоборот, укажите сначала путь на ней.

```bash
scp user@server:/home/user/myfile.txt ./
```

Вместо пользователя и сервера (`user@server`) можно указать [имя хоста](add-ssh-key.md) из файла `config`. 

## Docker

Для копирования файлов в и из Docker контейнера используется команда `docker cp`. Принцип работы схож с `scp`: первый аргумент — что копировать, второй — куда копировать. Для указания контейнера используется его имя.

```bash
docker cp ./dump.sql pg:/
docker cp pg:/dump.sql ./
```

## Ссылки

* [Docker documentation: docker cp](https://docs.docker.com/engine/reference/commandline/cp/)